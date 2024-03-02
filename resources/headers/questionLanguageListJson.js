/**
 * 获取当前语言列表
 * @returns {{headers: {"content-type": string}, method: string, body: string}}
 */
export function getQuestionLanguageListJson() {
    return {
        headers: {"content-type": "application/json"},
        body: `{
            "query": "\\n    query languageList {\\n  languageList {\\n    id\\n    name\\n  }\\n}\\n    ",
            "variables": {},
            "operationName": "languageList"
        }`,
        method: 'POST',
    }
}