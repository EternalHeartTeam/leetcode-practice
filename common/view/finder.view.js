import path from 'node:path'
import { createQuestionById, createQuestionByTitleSlug } from '#common/utils/cli-utils/createQuestion.js'
import { logger } from '#common/utils/logger/logger.js'
import { getAllQuestionList } from '#common/utils/question-getter/getAllQuestionList.js'
import { getPlanQuestionList } from '#common/utils/question-getter/getPlanQuestionList.js'
import { getQuestionByKeyword } from '#common/utils/question-getter/getQuestionByKeyword.js'
import { getQuestionTagType } from '#common/utils/question-getter/getQuestionTagType.js'
import { getStudyPlanList } from '#common/utils/question-getter/getStudyPlanList.js'
import { getQuestionListCodeBySlug, getQuestionListCodeByTag } from '#common/utils/question-handler/getQuestionListCodeBy.js'
import { getAllQuestion, setAllQuestion } from '#common/utils/store/controller/allQuestion.js'
import input from '@inquirer/input'
import select, { Separator } from '@inquirer/select'

function handleQuestionList(list) {
  const questionList = []
  list.forEach((item) => {
    if (!item.premiumOnly && item.name.indexOf('SQL') <= -1 && item.name.indexOf('Pandas') <= -1) {
      questionList.push({
        name: `${item.name}(${item.questionNum}题)`,
        value: item.slug,
      })
    }
  })
  return questionList
}

async function studyMode(baseDir = process.cwd()) {
  // const sprintInterviewCompanyList = await getStudyPlanList(
  //   'sprint-interview-company'
  // )
  const crackingCodingInterviewList = await getStudyPlanList('cracking-coding-interview')
  const deepDiveTopicsList = await getStudyPlanList('deep-dive-topics')
  const questionList = [
    // ...handleQuestionList(sprintInterviewCompanyList),
    // new Separator(),
    ...handleQuestionList(crackingCodingInterviewList),
    new Separator(),
    ...handleQuestionList(deepDiveTopicsList),
  ]
  const planListMode = {
    message: '请选择学习计划',
    choices: questionList,
    pageSize: 30,
  }
  const planSlug = await select(planListMode)
  const createMode = await select({
    message: '拉题模式',
    choices: [
      { name: '单个选择', value: 'single' },
      { name: '全部拉取(不穩定)', value: 'all' },
    ],
  })
  if (createMode === 'single') {
    const { planSubGroups } = await getPlanQuestionList(planSlug)
    const planList = planSubGroups.reduce((acc, cur) => {
      acc.push(
        ...cur.questions.map((res) => {
          return {
            cnTitle: res.translatedTitle,
            enTitle: res.titleSlug,
          }
        }),
      )
      return acc
    }, [])
    const singleMode = {
      message: '请选择题目?',
      choices: planList.map(res => ({
        name: res.cnTitle,
        value: res.enTitle,
      })),
      pageSize: 30,
    }
    const singleChoice = await select(singleMode)

    await createQuestionByTitleSlug(singleChoice, baseDir)
  }
  if (createMode === 'all') {
    const dir = path.resolve(baseDir, planSlug.toString())
    logger.off()
    await getQuestionListCodeBySlug(planSlug, dir)
    logger.on()
    logger.info(`题目全部拉取完成: file://${dir}`)
  }
}

async function keywordMode(baseDir = process.cwd()) {
  const keyword = await input({ message: '请输入关键词', name: 'keyword' })
  const data = await getQuestionByKeyword(keyword)
  const list = data?.map((q) => {
    return {
      name: `${q.frontendQuestionId}.${q.titleCn}`,
      value: q.frontendQuestionId,
    }
  })
  const listQuestion = {
    type: 'list',
    name: 'chooseQuestion',
    message: '请选择题目',
    choices: list,
    pageSize: 30,
  }
  const chooseQuestion = await select(listQuestion)
  await createQuestionById(chooseQuestion, baseDir)
}

async function selectMode(baseDir = process.cwd()) {
  const questionTagList = await getQuestionTagType()
  const tagList = questionTagList.reduce((acc, cur) => {
    acc.push(
      ...cur.tagRelation.map((res) => {
        return {
          name: `${res.tag.nameTranslated ? res.tag.nameTranslated : res.tag.name}(${res.questionNum})`,
          value: res.tag.slug,
        }
      }),
    )
    return acc
  }, [])

  const tagQuestion = {
    type: 'list',
    name: 'chooseTag',
    message: '请选择标签',
    choices: tagList,
    pageSize: 30,
  }
  const chooseTag = await select(tagQuestion)
  const allQuestion = await getAllQuestion()
  // 未发现题目 所以先自动拉取题目
  if (!allQuestion?.length) {
    logger.info('本地数据库未初始化,自动执行初始化流程,请稍等~')
    try {
      const allQuestionData = await getAllQuestionList()
      await setAllQuestion(allQuestionData)
      const newData = await getAllQuestion()
      allQuestion.push(...newData)
    }
    catch (e) {
      logger.error('初始化失败!终止.')
      process.exit(0)
    }
    finally {
      logger.info('本地数据库初始化完成.')
    }
  }
  const tagQuestionList = allQuestion.filter(question => question.topicTags?.some(topic => topic.slug === chooseTag))
  if (!tagQuestionList?.length) {
    logger.info('您选择的类型暂无可拉取题目~')
    process.exit(0)
  }
  const createMode = await select({
    message: '拉题模式',
    choices: [
      { name: '单个选择(不穩定)', value: 'single' },
      { name: '全部拉取(不穩定)', value: 'all' },
    ],
  })
  if (createMode === 'single') {
    const singleMode = {
      type: 'list',
      name: 'chooseTagQuestion',
      message: '请选择题目',
      choices: tagQuestionList.map(res => ({
        name: res.translatedTitle,
        value: res.questionId,
      })),
      pageSize: 30,
    }

    const singleChoice = await select(singleMode)
    await createQuestionById(singleChoice, baseDir)
  }
  if (createMode === 'all') {
    const dir = path.resolve(baseDir, chooseTag.toString())
    logger.off()
    await getQuestionListCodeByTag(tagQuestionList, dir)
    logger.on()
    logger.info(`题目全部拉取完成: file://${dir}`)
  }
}

export async function easyFinderView(baseDir = process.cwd()) {
  const choices = [
    { name: '关键词搜索', value: 'keyword', description: '关键词描述' },
    { name: '学习计划', value: 'study', description: '企业和经典面试题目列表' },
    { name: '筛选模式', value: 'select', description: '筛选题目' },
  ]

  const modeQuestion = {
    message: '请选择查找的模式?',
    choices,
  }
  const mode = await select(modeQuestion)

  const modeMap = {
    study: studyMode,
    keyword: keywordMode,
    select: selectMode,
  }
  await modeMap[mode](baseDir)
}
