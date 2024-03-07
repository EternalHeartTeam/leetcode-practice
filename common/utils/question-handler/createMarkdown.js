import fs from 'node:fs'
import path from 'node:path'

/**
 * 创建markdown
 * @param {*} description
 * @param {*} questionPath
 */
export function createMarkdown(description, questionPath) {
  const dir = path.dirname(questionPath)
  const descriptionPath = path.join(dir, 'description.md')
  fs.writeFileSync(descriptionPath, description)
}
