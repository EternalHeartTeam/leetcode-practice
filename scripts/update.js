// 更新脚本 默认是项目中
import {checkUpdate} from "#common/utils/update/update.js";
import inquirer from "inquirer";
import {updateProject} from "#common/utils/update/updateByEnv.js";

const {isGithubUpdate,githubVersion,localVersion} = await checkUpdate()
console.log(`当前版本: [${localVersion}] github版本: [${githubVersion}] `);
if(isGithubUpdate){
    const checkQuestion = {
        type: "confirm",
        name: "willUpdate",
        message: `是否进行更新?`
    };
    const {willUpdate} = await inquirer.prompt(checkQuestion, null);
    if (willUpdate) {
        // 4.1 选择更新
        console.log("开始更新...");
        const result = await updateProject();
        console.log("更新完成~祝你使用愉快~")
    } else {
        // 4.2 取消更新
        console.log("你选择跳过此次更新,如果想要进行更新,随时可以使用参数 -u 进行更新检测!祝你使用愉快~");
    }
    process.exit(0);
}else{
    console.log("当前版本为最新版本~无需更新!");
}
process.exit(0);