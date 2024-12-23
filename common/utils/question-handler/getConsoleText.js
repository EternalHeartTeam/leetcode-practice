import { DefaultLang } from '#common/constants/question.const.js'
import { getQuestionUrl } from '#common/utils/question-handler/getQuestionUrl.js'
import { setLineComment } from '#common/utils/question-handler/questionLanguage.js'

export function getConsoleText(question) {
  const url = getQuestionUrl(question.slug)
  if (question.lang === DefaultLang)
    return `console.log('点击跳转到题目提交: ${url}');`
  else return setLineComment(question.lang, `题目地址：${url}`)
}
