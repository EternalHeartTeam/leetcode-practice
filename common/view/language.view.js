import { DefaultLang } from '#common/constants/question.const.js'
import { logger } from '#common/utils/logger/logger.js'
import { LANGUAGES, setQuestionLanguage } from '#common/utils/question-handler/questionLanguage.js'
import inquirer from 'inquirer'

export async function easyLanguageView(defaultLang = DefaultLang) {
  const list = LANGUAGES.map(o => o.name)
  const setQuestion = [
    {
      type: 'list',
      name: 'newSet',
      message: '请确认你要设置CLI的语言环境(如果选项匹配成功，那么按下回车确认即可)',
      choices: list,
      default: defaultLang,
    },
  ]
  const { newSet } = await inquirer.prompt(setQuestion, null)
  logger.info('设置语言环境为:', newSet)
  await setQuestionLanguage(newSet)
  process.exit(0)
}
