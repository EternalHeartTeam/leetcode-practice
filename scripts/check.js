/**
 * 执行脚本
 */
import {temExe} from "#common/utils/temExe.js";
import {readStore} from "#common/utils/store.js";
import {showLogs} from "#common/utils/showLogs.js";
import fs from 'fs';
import vm from 'vm'
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

function executeScript(filePath, content) {
const fileContent = fs.readFileSync(filePath, 'utf-8');

const script = new vm.Script(fileContent);
return script.runInContext(content);

}
async function main() {
    const src = parseFilePath(`${process.cwd()}/src/${name}/index.js`);

    try {
      await  executeScript(src, vm.createContext({
            showLogs
        }))
   } catch (error) {
       console.log('执行失败', error)
   }
}
main()
