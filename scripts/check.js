/**
 * 执行脚本
 */
import {temExe} from "#common/utils/temExe.js";
import {readStore} from "#common/utils/store.js";
import {parseFilePath} from "#common/utils/parseFilePath.js";
const args = process.argv.slice(2);
let name;
switch (args[0]) {
    case "-r": {
        const random = readStore("random-question-info")
        name = `${random.id}.${random.enName}`;
        console.log(`[leet-check]检测当前随机题目:${name}`)
        break;
    }

    case "-i": {
        let id = args[1];
        const specified = readStore("specified-question-info")
        name = `${specified.id}.${specified.enName}`;
        if (id === undefined && name.startsWith("undefined")) {
            console.warn("请指定对应的编号进行检查!")
        }
        console.log(`[leet-check]检测题目:${name}`)
        break;
    }

    case "-t":
    default: {
        const question = readStore("today-question-info")
        name = `${question.id}.${question.enName}`;
        console.log(`[leet-check]检测题目:${name}`)
    }
        break;
}
const filePath = parseFilePath(`./src/${name}/index.js`);
temExe('node {0}',filePath)
    .then(res => console.log(`执行结果:\n${res}`))
    .catch(e => console.log("执行报错: ", e));
