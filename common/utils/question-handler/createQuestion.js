import fs from "fs";
import path from "path";
import {fulfillQuestion} from "#common/utils/question-handler/fulfillQuestion.js";
export const sourceFilePath = path.normalize('resources/template/template.js');
export const createQuestion = (question,questionDir) => {
  return new Promise(resolve=>{
    let filePath = path.normalize(path.join(questionDir, 'index.js'));
    if(fs.existsSync(filePath)){
      resolve(false);
    }else{
      // 创建目录
      fs.mkdir(questionDir, { recursive: true }, () => {
        // 复制文件
        fs.copyFile(sourceFilePath, filePath, 0, () => {
          fulfillQuestion(filePath,question)
          resolve(filePath);
        });
      });
    }
  })
}
