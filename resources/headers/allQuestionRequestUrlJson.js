export function getAllQuestionRequestUrlJson() {
    return {
        headers: { 'content-type': 'application/json' },
        body: '{"operationName":"allQuestionUrls","variables":{},"query":"query allQuestionUrls {\\n  allQuestionUrls {\\n    questionUrl\\n    __typename\\n  }\\n}\\n"}',
        method: 'POST'
    };
}
