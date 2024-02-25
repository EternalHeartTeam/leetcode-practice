import {describe, expect, it} from "vitest";
import {parseFilePath} from "#common/utils/file/parseFilePath.js";

const path = "src/LRC 257.pp";
describe("parseFilePath",()=>{
    it('是否正确的转化了地址', () => {
        expect(parseFilePath(path)).equal(`\"src/LRC 257.pp\"`,"正确解析地址")
    })
})
