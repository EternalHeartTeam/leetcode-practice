import { DefaultLang } from '#common/constants/question.const.js'
import { setBlockComment } from '#common/utils/question-handler/questionLanguage.js'
import { removeDomTags } from '../functions/removeDomTags.js'
import { getDataStructure } from './parseStructure.js'

/**
 * 输出的日志
 * @param question
 * @param functionName
 * @param cases
 * @param expires
 * @returns {`showLogs(
  ${string},
  {
    data: [${string}],
    structure: ${string}
  },
  {
    data: [${string}],
    structure: ${string}
  }
)`}
 */
function logsTemplate(question, functionName, cases, expires) {
  return `showLogs(
  ${functionName},
  {
    data: [${cases}],
    structure: ${JSON.stringify(getDataStructure(question.code))}
  },
  {
    data: [${expires}],
    structure: ${JSON.stringify(getDataStructure(question.code, 'return'))}
  }
)`
}

/**
 * test case 需要从两个地方拿到内容
 * 1.详情：拿到默认的几个用例
 * 2.函数名：拿到函数名创建用例函数
 * @param question
 * @returns {string}
 */
export function getTestCase(question) {
  // 完整的一条语句的reg
  const inputReg = /(<[a-z]+>)?输入[：|:](<\/[a-z]+>)?.+\n/gi
  const inputStartReg = /(<[a-z]+>)?输入[：|:]/gi
  // 输出的reg
  const outputReg = /(<[a-z]+>)?输出[：|:](<\/[a-z]+>)?.+\n/gi
  const outputStartReg = /(<[a-z]+>)?输出[：|:]/gi
  // 结尾
  const endReg = /(<\/[a-z]+>)?/gi

  const detail = question.detail?.replaceAll('`', '')
  const cases = detail?.match(inputReg)?.map(
    str =>
      `[${removeDomTags(
        str
          ?.replace(inputStartReg, '')
          ?.replace(endReg, '')
          ?.replace('\n', '')
          .replace(/[a-z]+ =/gi, ''),
      )}]`,
  )
  const expires = detail?.match(outputReg)?.map(str =>
    removeDomTags(
      str
        ?.replace(outputStartReg, '')
        ?.replace(endReg, '')
        ?.replace('\n', '')
        .replace(/[a-z]+ =/gi, ''),
    ),
  )
  if (question.lang === DefaultLang) {
    const functionName = question.code
      ?.match(/(var|let|const).+=/g)?.[0]
      ?.replace(/((var|let|const)|=)\s?/g, '')
      .trim()
    if (!functionName)
      return ''
    return setBlockComment(question.lang, 'Test Cases') + logsTemplate(question, functionName, cases, expires)
  }
  else {
    // 其他语言无法支持测试 只能提供测试数据
    // 生成注释语句
    let showText = `暂无法支持除JS外的语言测试,提取的一些入参和返回值供自行测试，每一个case中的第一行为入参，第二行为返回值\n`
    for (let i = 0; i < Math.max(cases?.length ?? 0, expires?.length ?? 0); i++) {
      showText += `case ${i + 1}:\n`
      showText += `${cases?.[i]}\n` ?? '[参数获取错误]\n'
      showText += `${expires?.[i]}\n` ?? '[返回值获取错误]\n'
    }
    showText += `\n`
    return setBlockComment(question.lang, showText)
  }
}
