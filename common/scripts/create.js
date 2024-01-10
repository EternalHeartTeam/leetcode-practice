/**
 * 工作区为 根目录
 */
const fs = require("fs");
const {temExe} = require("../utils/temExe");

const args = process.argv.slice(2);
const path = args[0];
// 判断是否存在
fs.exists(`./src/${path}`, (exists) => {
    if (exists) {
        console.log(`./src/${path} 已存在,请检查目录!`);
        return;
    }
    temExe('mkdir -p ./src/{0} && cp ./common/template/template.js ./src/{0}/index.js')
        .then(() => console.log(`创建成功`))
        .catch(e => console.log("创建报错: ", e));
})

