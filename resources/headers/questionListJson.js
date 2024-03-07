export function getQuestionListJson(skip = 0, limit = 50) {
  return {
    headers: { 'content-type': 'application/json' },
    body: `{"query":"query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {\\nproblemsetQuestionList(\\ncategorySlug: $categorySlug\\nlimit: $limit\\nskip: $skip\\nfilters: $filters) {\\ntotal\\nquestions {\\n  frontendQuestionId\\n  title\\n  titleCn\\n  titleSlug\\n}\\n}\\n}","variables":{"categorySlug":"all-code-essentials","skip":${skip},"limit":${limit},"filters":{}},"operationName":"problemsetQuestionList"}`,
    method: 'POST'
  }
}
