import {graphql} from "#common/utils/http/graphql.js";
import {getQuestionLanguageListJson} from "#resources/headers/questionLanguageListJson.js";

export const getQuestionLanguage = async ()=>{
    const res = await graphql(getQuestionLanguageListJson());
    console.log(JSON.stringify(res))
}