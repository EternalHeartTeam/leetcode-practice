import {getQuestionListJson} from "#resources/headers/questionListJson.js";

export async function getQuestionList() {
    const base = await fetch('https://leetcode.cn/graphql/', getQuestionListJson()).then((res) => res.json());
    return question;
}
