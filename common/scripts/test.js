const {getQuestionListJson} = require("../resources/questionListJson");
// fetch("https://leetcode.cn/graphql/", getQuestionListJson(1)).then((res => res.json())).then((res)=>{
//     return res?.data?.problemsetQuestionList?.questions?.map(q=>q.frontendQuestionId);
// });
const args = process.argv.slice(2);
console.log(args)