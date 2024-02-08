import {createColorFont} from "#common/utils/etc/createColorFont.js";
import inquirer from "inquirer";

const question = [{
    type: 'input',
    name: 'font',
    message: '请输入要渐变色的文本:',
    choices: ['today', 'identity', 'random'],
}];
// 第一个问题 选择的模式
const {font} = await inquirer.prompt(question, null);
createColorFont(font);