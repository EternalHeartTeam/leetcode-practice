import { writeFileSync } from 'node:fs'
import path from 'node:path'
import gradient_string from 'gradient-string'

// 创建渐变色字体
export function createColorFont(font) {
  const code = gradient_string([
    { color: '#ff0000', pos: 0 },
    { color: '#ffc600', pos: 0.5 },
    { color: '#003dff', pos: 1 }
  ])(font)
  writeFileSync(path.resolve(process.cwd(), 'colorFont.js'), code)
  console.log(
    `[ColorFont]Create color font: ${font}\ncode location:${path.resolve(process.cwd(), 'colorFont.js')}`
  )
  console.log(code)
}
