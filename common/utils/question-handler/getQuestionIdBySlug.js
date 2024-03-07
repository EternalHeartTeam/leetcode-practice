const headers = {
  "content-type": "application/json",
}




export async function getQuestionIdBySlug(titleSlug) {

  const body = {
    query: "\n    query questionTitle($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    title\n    titleSlug\n    isPaidOnly\n    difficulty\n    likes\n    dislikes\n    categoryTitle\n  }\n}\n    ",
    variables: {
        titleSlug,
    },
    operationName: "questionTitle"
}
  const initJson = {
    headers,
    body: JSON.stringify(body),
    method: "POST"
  
  }
  const res = await fetch("https://leetcode.cn/graphql/", initJson).then(res=> res.json());
  const  { data: question} = res;
  return question

}

// await getQuestionIdBySlug("group-anagrams")