const fs = require("fs");
const path = require("path");

function createQuestion(newPath){
    return new Promise((resolve, reject) => {
        const newDir = path.normalize( `./src/${newPath}`);
        const sourceFilePath = path.normalize("./common/template/template.js")
        const newFilePath = path.join(newDir,"index.js")
        // 判断是否存在
        fs.exists(newFilePath, (exists) => {
            if (exists) {
                reject(`./src/${newPath} 已存在,请检查目录!`);
            }else{
                try {

                    // 创建目录
                    fs.mkdir(newDir, { recursive: true },()=>{
                        // 复制文件
                        fs.copyFile(sourceFilePath, newFilePath,0,()=>{
                            resolve(newFilePath);
                            console.log(`File '${sourceFilePath}' copied to '${newFilePath}'`);
                        });
                    });
                } catch (error) {
                    reject('Error:', error.message);
                }
            }
        })
    })
}

module.exports = {createQuestion}
