/**
 * 执行脚本
 */
const { temExe } = require('../utils/temExe');
temExe('node ./src/{0}/index.js')
    .then(res => console.log(`执行结果:\n${res}`))
    .catch(e => console.log("执行报错: ", e));
