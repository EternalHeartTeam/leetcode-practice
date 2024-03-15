import fs from 'node:fs'
import path from 'node:path'

/**
 * 在目录中查找题目文件
 * @param dir
 * @returns {string|string[]}
 */
export function getQuestionFileInDir(dir) {
  const list = fs.readdirSync(dir)
  const questionLikes = list
    .filter(name => name.startsWith('question'))
    .map(file => path.resolve(dir, file))
  return questionLikes?.length === 1 ? questionLikes[0] : questionLikes
}
