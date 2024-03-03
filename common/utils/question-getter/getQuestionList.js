import {getQuestionListJson} from "#resources/headers/questionListJson.js";
import {graphql} from "#common/utils/http/graphql.js";

export async function getQuestionList() {
    const base = await graphql(getQuestionListJson());
    // todo 列表
    const question = base.questions;
    return question;
}
