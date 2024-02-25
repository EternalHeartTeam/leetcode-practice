import {checkUpdate, getGithubVersion} from "#common/utils/etc/update.js";
import inquirer from "inquirer";

export const easyUpdateView = async()=>{
    const checkQuestion = {
        type:"confirm",
        name:"willUpdate",
        message:"检测到更新,是否进行更新?"
    };
    getGithubVersion()
    const {localVersion,remoteVersion,isUpdate} = {};//await checkUpdate();
    console.log(`当前最新版本为: ${remoteVersion}`);
    console.log(`本地版本为: ${localVersion}`);
    if(isUpdate){
        const {willUpdate} = await inquirer.prompt(checkQuestion,null);
        if(willUpdate){
            console.log("确认更新!")
        }else{
            console.log("跳过此次更新!")
        }
    }
}



