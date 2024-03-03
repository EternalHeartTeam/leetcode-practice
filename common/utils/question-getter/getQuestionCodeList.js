import {graphql} from "#common/utils/http/graphql.js";
import {getQuestionCodeListJson} from "#resources/headers/questionCodeListJson.js";

/**
 * 获取代码列表
 * @param slug
 * @returns {Promise<*>}
 */
export const getQuestionCodeList = async (slug)=>{
    const res = await graphql(getQuestionCodeListJson(slug));
    return res.data.question?.codeSnippets;
}