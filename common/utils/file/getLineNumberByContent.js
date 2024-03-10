import fs from 'node:fs'

/**
 * 通过给入的文件地址和内容 给出对应的行号
 * @param filePath
 * @param searchString
 * @returns {Promise<unknown>}
 */
export function getLineNumberByContent(filePath, searchString) {
  return new Promise((resolve, reject) => {
    let lineNumber = 0
    const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' })

    readStream.on('data', (chunk) => {
      const lines = chunk.split('\n')
      for (let line of lines) {
        lineNumber++
        if (line.includes(searchString)) {
          readStream.close()
          resolve(lineNumber)
          return
        }
      }
    })

    readStream.on('end', () => {
      console.warn(`"${searchString}" not found in file: ${filePath}`)
      resolve(0)
    })

    readStream.on('error', (error) => {
      console.warn(`"${searchString}" not found in file: ${filePath}`)
      resolve(0)
    })
  })
}
