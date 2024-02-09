export function getCodeDetailJson(todayQuestionEnName) {
  return {
    headers: { "content-type": "application/json" },
    body: `{"query":"\\n    query questionEditorData($titleSlug: String!) {\\n  question(titleSlug: $titleSlug) {\\n    questionId\\n    questionFrontendId\\n    codeSnippets {\\n      lang\\n      langSlug\\n      code\\n    }\\n    envInfo\\n    enableRunCode\\n    hasFrontendPreview\\n    frontendPreviews\\n  }\\n}\\n    ","variables":{"titleSlug":"${todayQuestionEnName}"},"operationName":"questionEditorData"}`,
    method: 'POST',
  };
}
