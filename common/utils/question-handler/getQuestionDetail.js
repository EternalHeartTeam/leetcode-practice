import {getQuestionDetailJson} from "#resources/headers/questionDetailJson.js";
import {getCode} from "#common/utils/question-handler/getCode.js";
import {getQuestionLanguage} from "#common/utils/question-handler/questionLanguage.js";
import {graphql} from "#common/utils/http/graphql.js";

/**
 * 获取代码详情
 * @param slug
 * @param extra
 * @returns {Promise<*&{code: *, detail: *, title: *, slug}>}
 */
export async function getQuestionDetail(slug, extra = {}) {
  // 标题的英文字符串
  const questionDetail = await graphql(getQuestionDetailJson(slug));
  const detail = questionDetail.data.question;
  const curLang = await getQuestionLanguage();
  const code = await getCode(slug,curLang);
  return {
    id: detail?.['questionId'],
    slug: slug,
    title: detail?.['translatedTitle'],
    detail: detail?.['translatedContent'],
    lang:curLang,
    code,
    ...extra,
  };
}

