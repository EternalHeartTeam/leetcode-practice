import fs from "fs";
import vm from "vm";
import {showLogs} from "#common/utils/question-handler/showLogs.js";

/**
 * 执行脚本 - 可传入上下文
 * @param filePath
 * @param context
 * @returns {any}
 */
export function executeScript(filePath, context) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const script = new vm.Script(fileContent);
    return script.runInContext(context);
}

/**
 * 执行问题检测进程
 * @param path
 */
export const checkQuestion = async (path)=>{
    return await executeScript(path, vm.createContext({
        showLogs,console
    }))
}

