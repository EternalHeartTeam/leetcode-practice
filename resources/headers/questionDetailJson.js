export function getQuestionDetailJson(slug) {
  return {
    headers: { "content-type": "application/json" },
    body: `{"query":"\\n    query questionTranslations($titleSlug: String!) {\\n  question(titleSlug: $titleSlug) {questionId\\n    translatedTitle\\n    translatedContent\\n  }\\n}\\n    ","variables":{"titleSlug":"${slug}"},"operationName":"questionTranslations"}`,
    method: 'POST',
  };
}
