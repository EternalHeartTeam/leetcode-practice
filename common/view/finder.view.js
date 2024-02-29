import inquirer from "inquirer";

export const easyFinderView = async ()=>{
    const modeQuestion = [{
        type:"list",
        name:"mode",
        message:"请选择查找的模式?",
        choices: ["关键词搜索","Top 100列表查询","进入筛选模式"]
    }]
    const {mode} = await inquirer.prompt(modeQuestion,null);
}

await easyFinderView()
