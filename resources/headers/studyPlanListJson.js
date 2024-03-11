export function getStudyPlanListJson() {
  return {
    headers: { 'content-type': 'application/json' },
    body: "{\"query\":\"\\n    query GetProblemSetStudyPlanAds {\\n  studyPlansV2AdQuestionPage {\\n    cover\\n    highlight\\n    name\\n    onGoing\\n    premiumOnly\\n    questionNum\\n    slug\\n  }\\n}\\n    \",\"variables\":{},\"operationName\":\"GetProblemSetStudyPlanAds\"}",
    method: 'POST'
  }
}
