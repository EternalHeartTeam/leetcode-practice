import {exec} from "child_process";

/**
 * 根据环境进行更新
 * @param {"cli"|"project"} env
 */
export const updateByEnv = async (env)=>{
    switch (env){
        case "cli":
            // 执行CLI更新逻辑
            return await updateCli();
        case "project":
            // 执行项目更新逻辑
            return await updateProject();
        default:
            throw new Error(`Unsupported environment: ${env}`);
    }
}
/**
 * 更新CLI
 * @returns {Promise<void>}
 */
export const updateCli = ()=>{
    return new Promise((resolve,reject)=>{
        exec(`npm install -g leetcode-practice`, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}
/**
 * 更新项目
 * @returns {Promise<void>}
 */
export const updateProject = async ()=>{
    // todo 更新项目
    // 0. 询问是否存在自己修改过的内容
    // 0.1 如果有过更改,终止更新脚本,并给出提示建议
    // 0.2 如果没有更改,进行更新操作
    // 1. 检测当前的git工作区
    // 1.1 如果有内容,提示提交,终止更新
    // 1.2 如果空,可以进行更新
    // 2. 通过raw.github.com下载所有的文件并对应更新文件(除package.json)
    // 2.0 所有的文件在更新后都进行git add [file-path]
    // 2.1 如果文件不存在,则创建文件
    // 2.2 如果文件存在,则覆盖文件
    // 2.3 更新package.json文件中的版本号为最新的版本号.
    // 3. 创建一个git的commit update:Version [版本号]
    // 4. 完成更新
}