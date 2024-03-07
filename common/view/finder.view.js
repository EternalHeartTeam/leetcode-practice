import inquirer from 'inquirer'
import { getQuestionKeyword } from '#common/utils/question-getter/getQuestionByKeyword'

export async function easyFinderView() {
  const modeQuestion = [{
    type: 'list',
    name: 'mode',
    message: '请选择查找的模式?',
    choices: ['关键词搜索', 'Top 100列表查询', '进入筛选模式'],
  }]
  const { mode } = await inquirer.prompt(modeQuestion, null)
  const questionKeyword = [{
    type: 'input',
    name: 'identity',
    message: '请输入关键词:',
  }]

  switch (mode) {
    case '关键词搜索':
      const {identity} = getQuestionKeyword(await inquirer.prompt(questionKeyword, null))
      console.log(identity)
      break
    case 'Top 100列表查询':
      break
    case '进入筛选模式':
      break
  }
}