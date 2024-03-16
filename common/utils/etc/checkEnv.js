/**
 * 检测当前的环境是 cli 还是 项目中
 * 通过meta信息中的url来判断
 * cli: file:///Users/mac-106/wh131462/workspace/leetcode-practice/pl-cli/.bin/lc.js
 * project: file:///Users/mac-106/wh131462/workspace/leetcode-practice/common/utils/etc/checkEnv.js
 */
export function currentEnv() {
    const url = import.meta.url;
    const projectReg = /etc\/checkEnv.js$/im;
    return projectReg.test(url) ? 'project' : 'cli';
}

/**
 * 检查npm安装时的位置
 */
export function npmEnv() {
    return true ? 'global' : 'module';
}
