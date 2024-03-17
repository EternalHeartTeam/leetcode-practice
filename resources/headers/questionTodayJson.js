export function getQuestionTodayJson() {
    return {
        headers: { 'content-type': 'application/json' },
        body: '{"query":"\\n    query questionOfToday {\\n  todayRecord {\\n    date\\n    userStatus\\n    question {\\n      questionId\\n      frontendQuestionId: questionFrontendId\\n      difficulty\\n      title\\n      titleCn: translatedTitle\\n      titleSlug\\n      paidOnly: isPaidOnly\\n      freqBar\\n      isFavor\\n      acRate\\n      status\\n      solutionNum\\n      hasVideoSolution\\n      topicTags {\\n        name\\n        nameTranslated: translatedName\\n        id\\n      }\\n      extra {\\n        topCompanyTags {\\n          imgUrl\\n          slug\\n          numSubscribed\\n        }\\n      }\\n    }\\n    lastSubmission {\\n      id\\n    }\\n  }\\n}\\n    ","variables":{},"operationName":"questionOfToday"}',
        method: 'POST'
    };
}
