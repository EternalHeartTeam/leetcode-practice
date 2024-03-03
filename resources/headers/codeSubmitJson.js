/**
 * 提交请求的JSON数据
 * 地址：https://leetcode.cn/problems/reverse-integer/submit/
 * @param lang
 * @param id
 * @param code
 * @returns {{headers: {"content-type": string}, method: string, body: string}}
 */
export function codeSubmitJson(lang,id,code){
    return {
        headers: { "content-type": "application/json" },
        body: `{
                    "lang": "${lang}",
                    "question_id": "${id}",
                    "typed_code": "${code}"
                }`,
        method: 'POST',
    }
}