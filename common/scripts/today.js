/**
 * 调用此函数直接获取今日的题目 并生成项目
 * 接受一个参数 如果没传入 那么会用题目的编号作为名字
 */

const {getQuestion} = require("../utils/getQuestion");
const {temExe} = require("../utils/temExe");
const fs = require("fs");
const path =require("path");
const args = process.argv.slice(2);
// 获取问题的全部信息
getQuestion().then(question=>{
    const projectName = args[0]??question.id;// 传入 或者没传入 默认值为信息的编号
    const targetPath = path.normalize(`./src/${projectName}`);
    // 创建
    fs.exists(targetPath,(exists)=> {
        if (exists) {
            console.log(`目录${targetPath}已存在,请检查目录!`);
            return;
        }
        console.log(question)
        /**
         * todo 崩溃 我也不想这样写的 但是在Windows下就是这么麻烦 辛苦你了
         */
        temExe(`mkdir ${path.normalize("./src/{0}")}`,projectName)
            .then(()=>temExe(`cp ${path.normalize("./common/template/template.js")} ${path.normalize("./src/{0}/index.js")}`,projectName)
                .then(() => {
                    const filePath = path.normalize("./src/{0}/index.js".replace("{0}",projectName))
                    console.log(`${filePath}创建成功`)
                    // 开始填充内容
                    fs.readFile(filePath, 'utf8', function(err, data) {
                        if (err) throw err;

                        // 修改文件内容
                        data = data.replace('@题目', question.title).replace("@描述",question.detail);
                        fs.writeFile(filePath, data, function(err) {
                            if (err) throw err;
                            console.log(`今日题目[${question.title}]已完成填充`);
                        });
                    });
                })
                .catch(e=>console.log("复制报错:",e))
            )
            .catch(e => console.log("创建报错: ", e));
    })

})

