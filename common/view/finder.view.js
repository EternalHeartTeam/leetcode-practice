import select, { Separator } from '@inquirer/select'
import {
  getTitleSlugList,
  getHot100QuestionListJSCode
} from '#common/utils/question-handler/getHot100QuestionList.js'
import { createQuestionByTitleSlug } from '#common/utils/create-check/createUtil.js'

const hotMode = async () => {
  const createMode = await select({
    message: '拉题模式',
    choices: [
      { name: '单个选择', value: 'single' },
      { name: '全部拉取', value: 'all' }
    ]
  })
  if (createMode === 'single') {
    const titleSlugList = await getTitleSlugList()
    const singleMode = {
      message: '请选择题目?',
      choices: titleSlugList.map((res) => ({
        name: res,
        value: res
      }))
    }
    const singleChoice = await select(singleMode)

    await createQuestionByTitleSlug(singleChoice)
  }
  if (createMode === 'all') {
    const titleSlugList = await getHot100QuestionListJSCode()
  }
}

const keywordMode = async () => {
  const data = await getQuestionByKeyword(
    await inquirer.prompt(questionKeyword, null)
  )
  const questionList = [
    {
      type: 'list',
      name: 'chooseQuestion',
      message: '请选择题目',
      choices: []
    }
  ]
  let list = []
  data.map((q) => list.push(q.titleCn))
  questionList[0].choices = list.join(',')
  console.log(list)
}
const selectMode = async () => {}

export const easyFinderView = async () => {
  const choices = [
    { name: '关键词搜索', value: 'keyword', description: '关键词描述' },
    {
      name: 'hot 100列表查询',
      value: 'hot',
      description: '最受欢迎的100道题目'
    },
    { name: '筛选模式', value: 'select', description: '筛选题目' }
  ]

  const modeQuestion = {
    message: '请选择查找的模式?',
    choices
  }
  const mode = await select(modeQuestion)

  const modeMap = {
    hot: hotMode,
    keyword: keywordMode,
    select: selectMode
  }
  await modeMap[mode]()
}
