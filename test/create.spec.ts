import { test, expect, describe,vi, afterEach, it } from 'vitest';
import A from './features/test';
const { getQuestionToday} = require('../common/utils/getQuestionToday');
const {sourceFilePath} = require('../common/utils/createQuestion');
const {generateTemplateContent} = require('../common/utils/fulfillQuestion');
const {getQuestionById} = require('../common/utils/getQuestionById');
const {removeDomTags} = require('../common/utils/removeDomTags');
const fs = require('fs');


vi.mock('fs/promises', () => {
  return {
    writeFile: vi.fn(),
  }
})
const funRegex = /var\s+(\w+)\s*=\s*function\s*\(([^)]*)\)\s*{\s*([^}]*)\s*}/;
const isContainJsCode = (input) => funRegex.test(input);
const isContainTestCase = (input) => input.includes('showLogs(');

const handleText = (input) => input.replace(/\n+/g, '\n').replaceAll('\n', '\n * ');
const mockKeys = [ 'enName', 'title', 'detail', 'id', 'jsCode', 'date' ];

function isValidQuestion(res) {
  const content = generateTemplateContent(fileContent,res);
  // 是否含有函数
  expect(isContainJsCode(content)).toBeTruthy();
  // 是否含有测试用例
  expect(isContainTestCase(content)).toBeTruthy();
  // 是否含有描述
  expect(content.includes('示例')).toBeTruthy();
  expect(content.includes('提示')).toBeTruthy();

}
const fileContent = fs.readFileSync(sourceFilePath, 'utf-8');

describe('leet-create', ()=> {
  // 清楚mock历史记录
  afterEach(()=> {
    vi.clearAllMocks();
  })
  describe('with -t option', async() => {
    const res = await getQuestionToday();

    it('是否正确获取了今天的题目', () => {
      expect(Object.keys(res)).toEqual(mockKeys);
      // 比较日期是否相等
      expect(new Date(res.date).getDate()).toEqual(new Date().getDate());
      // 比较月份是否相等
      expect(new Date(res.date).getMonth()).toEqual(new Date().getMonth());
      // 比较年份是否相等
      expect(new Date(res.date).getFullYear()).toEqual(new Date().getFullYear());

    });
    it('是否正确的填充了今天的题目', async ()=> {
      isValidQuestion(res)

    })

  });
  describe('with -r option', async () => {
    const id_25 = '25';
    const res_25 = await getQuestionById(id_25);
    const id_LCS_03 = 'LCS 03';
    const res_LCS_03 = await getQuestionById(id_LCS_03);
    it('是否正确的获取了指定id的题目 25', async () => {
      expect(res_25.id).toEqual(id_25);
    })
    it('是否正确填充了指定id的题目 25', async ()=> {
      isValidQuestion(res_25)
    })
    it('是否正确的获取了指定id的题目 LCS 03', async () => {
      expect(res_LCS_03.id).toEqual(id_LCS_03);
    })
    it('是否正确填充了指定id的题目 9', async ()=> {
      isValidQuestion(res_LCS_03)
    })
    
    it('是否正确的获取了指定内容的题目 主题空间', async () => {
      const content = '主题空间';
      const res = await getQuestionById(content);
      expect(res.id).toEqual(null);
    })

  })
})

