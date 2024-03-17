/**
 * 获取hot 100 的请求header
 * @returns {{headers: {"content-type": string}, method: string, body: string}}
 */
export function getPlanQuestionListJson(slug) {
    return {
        headers: { 'content-type': 'application/json' },
        body: `{"query":"\\n    query studyPlanPastSolved($slug: String!) {\\n  studyPlanV2Detail(planSlug: $slug) {\\n    planSubGroups {\\n      slug\\n      questions {\\n        titleSlug\\n       translatedTitle\\n        status\\n      }\\n    }\\n  }\\n}\\n    ","variables":{"slug":"${slug}"},"operationName":"studyPlanPastSolved"}`,
        method: 'POST'
    };
}
