import gradient_string from "gradient-string";
import {writeFileSync} from "fs";
import path from "path";
// 创建渐变色字体
export const createColorFont = (font)=>{
    const code = gradient_string([
        { color: '#ff0000', pos: 0 },
        { color: '#ffc600', pos: 0.5 },
        { color: '#003dff', pos: 1 }
    ])(font)
    writeFileSync(path.resolve(process.cwd(),'colorFont.js'),code);
    console.log(`[ColorFont]Create color font: ${font}\ncode location:${path.resolve(process.cwd(),'colorFont.js')}`)
    console.log(code)
}
