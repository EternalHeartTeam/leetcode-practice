const fs = require("fs");
const path = require("path");
const readlinePromises = require('node:readline/promises');
const {getCountBySameName} = require("./getCountBySameName");
const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function createQuestion(newPath) {
    return new Promise((resolve, reject) => {
        const sourceFilePath = path.normalize("./common/template/template.js")
        let newDir = path.normalize(`./src/${newPath}`);
        let newFilePath = path.join(newDir, "index.js")
        // 判断是否存在
        fs.exists(newFilePath, async (exists) => {
            if (exists) {
                const recover = await rl.question(`你想创建的题目[${newPath}]已经存在，是否覆盖? (Y/N)\n`);
                // 如果不覆盖 可以给出两个选择 一个是退出创建进程 一个是创建一个别名
                if(!['y',''].includes(recover.toLocaleLowerCase())){
                    let reconfirm = await rl.question(`是否添加额外内容对题目进行区分，以创建此题目的另外一个解?(Enter/[[$+任意字符]]/N)\n[注:\`$\`符为原题目完整标题,添加额外符号后按\`Enter\`键确认,如不填写直接确认，系统会自动添加\`$[num]\`标识,例如:1.模拟[1]]\n`);
                    if(reconfirm.toLocaleLowerCase()==="n"){
                        console.log(`题目[${newPath}]创建终止`)
                        process.exit()
                    }
                    if(reconfirm===""||reconfirm.includes("$")){
                        // 默认 添加序号
                        reconfirm||=`$[${getCountBySameName(path.normalize("./src"),newPath)}]`;
                        const newFileName= reconfirm.replace("$",newPath);
                        newDir = path.normalize(`./src/${newFileName}`);
                        newFilePath = path.join(newDir, "index.js")
                        console.log(`[create]题目[${newPath}]创建副本[${newFileName}]`);
                    }else{
                        console.log(`提示:出于安全性和综合情况考虑,请务必按规定格式创建题目，违规题目暂时不予创建。
当前尝试创建题目为:[${reconfirm}]`)
                        process.exit()
                    }
                }// 如果覆盖 直接进行下一步
            }
            rl.close()
            try {
                // 创建目录
                fs.mkdir(newDir, { recursive: true }, () => {
                    // 复制文件
                    fs.copyFile(sourceFilePath, newFilePath, 0, () => {
                        resolve(newFilePath);
                    });
                });
            } catch (error) {
                reject('[createQuestion]Error:', error.message);
            }
        })
    })
}

module.exports = { createQuestion }
