import inquirer from 'inquirer'
import { getQuestionByKeyword } from '#common/utils/question-getter/getQuestionByKeyword.js'

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
      const data = await getQuestionByKeyword(await inquirer.prompt(questionKeyword, null))
      const questionList = [{
        type: 'list',
        name: 'chooseQuestion',
        message: '请选择题目',
        choices: []
      }]
      let list = []
      console.log(data)
      // data.map(q => list.push(q.titleCn))
      // questionList[0].choices = list.join(',')
      // console.log(list)
      // const { chooseQuestion } = await inquirer.prompt(questionList, null)
      // console.log(chooseQuestion)
      break
    case 'Top 100列表查询':
      break
    case '进入筛选模式':
      break
  }
  process.exit(0)
}

await easyFinderView()
