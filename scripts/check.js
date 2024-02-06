/**
 * 执行脚本
 */
import {temExe} from "#common/utils/etc/temExe.js";
import {parseFilePath} from "#common/utils/file/parseFilePath.js";
import {getQuestionByMode} from "#common/utils/store/store-realm.js";
const args = process.argv.slice(2);
let name;
switch (args[0]) {
    case "-r": {
        const random = await getQuestionByMode("random")
        name = `${random.id}.${random.slug}`;
        console.log(`[leet-check]检测当前随机题目:${name}`)
        break;
    }

    case "-i": {
        let id = args[1];
        const specified = await getQuestionByMode("identity")
        name = `${specified.id}.${specified.slug}`;
        if (id === undefined && name.startsWith("undefined")) {
            console.warn("请指定对应的编号进行检查!")
        }
        console.log(`[leet-check]检测题目:${name}`)
        break;
    }

    case "-t":
    default: {
        const question = await getQuestionByMode("today")
        name = `${question.id}.${question.slug}`;
        console.log(`[leet-check]检测题目:${name}`)
    }
        break;
}
const filePath = parseFilePath(`./src/${name}/index.js`);
temExe('node {0}',filePath)
    .then(res => console.log(`执行结果:\n${res}`))
    .catch(e => console.log("执行报错: ", e));
