// 'sprint-interview-company' // 名企面试 · 突击备战
// 'cracking-coding-interview' // 面试准备 · 全面通关
// 'deep-dive-topics' // 专项计划 · 深入学习
export function getStudyPlanListJson(type) {
  return {
    headers: { 'content-type': 'application/json' },
    body: `{\"query\":\"\\n    query GetStudyPlanByCatalog($catalogSlug: String!, $offset: Int!, $limit: Int!) {\\n  studyPlansV2ByCatalog(catalogSlug: $catalogSlug, offset: $offset, limit: $limit) {\\n    hasMore\\n    total\\n    studyPlans {\\n      slug\\n      questionNum\\n      premiumOnly\\n      onGoing\\n      name\\n      highlight\\n      cover\\n    }\\n  }\\n}\\n    \",\"variables\":{\"offset\":0,\"catalogSlug\":\"${type}\",\"limit\":12},\"operationName\":\"GetStudyPlanByCatalog\"}`,
    method: 'POST'
  }
}
