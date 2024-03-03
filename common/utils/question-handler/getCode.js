import {getQuestionCodeList} from "#common/utils/question-getter/getQuestionCodeList.js";

/**
 * 获取代码
 * @param slug
 * @param lang
 * @returns {Promise<*>}
 */
export  const getCode = async (slug,lang)=>{
    const list = await getQuestionCodeList(slug);
    return list.find(o=>o.langSlug === lang)?.code;
}