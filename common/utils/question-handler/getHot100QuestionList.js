

import { createQuestionByTitleSlug } from "../create-check/createUtil.js";
import path from "path";
const bodyString = "{\"query\":\"\\n    query studyPlanPastSolved($slug: String!) {\\n  studyPlanV2Detail(planSlug: $slug) {\\n    planSubGroups {\\n      slug\\n      questions {\\n        titleSlug\\n        status\\n      }\\n    }\\n  }\\n}\\n    \",\"variables\":{\"slug\":\"top-100-liked\"},\"operationName\":\"studyPlanPastSolved\"}"
const headers = {
  "content-type": "application/json",
}


const initJson = {
  headers,
  body: bodyString,
  method: "POST"

}
// 抓hot100列表
export  const getHot100QuestionList = async() => {
 const res =  await fetch("https://leetcode.cn/graphql/", initJson).then(res=> res.json())
 const { data: {
  studyPlanV2Detail
 } } = res;
 return studyPlanV2Detail
}

// 获取题目列表 
export const getTitleSlugList = async () => {
  const res = await getHot100QuestionList();
  const {planSubGroups} = res;
  return planSubGroups.reduce((acc, cur)=> {
    acc.push(...cur.questions.map(res=> res.titleSlug))
    return acc
  }, [])
}
//获取创建promise列表
const getPromiseList = async() => {
  const titleSlugList = await getTitleSlugList();
  const dir = path.join(process.cwd(), 'hot100')
  return titleSlugList.map((titleSlug) =>  createQuestionByTitleSlug(titleSlug,dir))

}

export  async function  getHot100QuestionListJSCode () {
  const promiseList = await getPromiseList();
  return await Promise.all(promiseList)
}
