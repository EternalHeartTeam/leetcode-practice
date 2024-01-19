function getQuestionSearchJson(keyword) {
    return {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "authorization": "",
            "baggage": "sentry-environment=production,sentry-release=dc00d92c,sentry-transaction=%2Fproblems%2F%5Bslug%5D%2F%5B%5B...tab%5D%5D,sentry-public_key=1595090ae2f831f9e65978be5851f865,sentry-trace_id=63e64ebe4c004e44af12023093cf6c60,sentry-sample_rate=0.03",
            "content-type": "application/json",
            "random-uuid": "3ba3266f-8cdc-50f8-76a8-afb018b0800f",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sentry-trace": "63e64ebe4c004e44af12023093cf6c60-8b25a25047a9cf20-0",
            "x-csrftoken": "5l2cDzYgivVOeSfwaQMMqVmaUOqWZKKRxUOufphTy9P6WKE8tajZYD0P21Qr3IRF",
            "cookie": "_bl_uid=a1lz4p9q294cs4d74npj8UU4g8p1; gr_user_id=b3bd9d67-816b-478c-b4ee-f13e289fd1b8; a2873925c34ecbd2_gr_last_sent_cs1=smallteddy; _gid=GA1.2.2051268794.1704617261; Hm_lvt_f0faad39bcf8471e3ab3ef70125152c3=1704421023; csrftoken=5l2cDzYgivVOeSfwaQMMqVmaUOqWZKKRxUOufphTy9P6WKE8tajZYD0P21Qr3IRF; a2873925c34ecbd2_gr_session_id=a49cd939-b802-49ce-b7f1-3f01b7da1559; a2873925c34ecbd2_gr_last_sent_sid_with_cs1=a49cd939-b802-49ce-b7f1-3f01b7da1559; a2873925c34ecbd2_gr_session_id_sent_vst=a49cd939-b802-49ce-b7f1-3f01b7da1559; _gat=1; messages=.eJyLjlaKj88qzs-Lz00tLk5MT1XSMdAxMtVRiik1M0i0iCk1TUkziik1T01OA5Jm5klAEcO0RKVYHXI1xgIAbLEkzQ:1rOSzN:wbrvDPKyUsGz-hhztv_YmeXUNqBadmexKC0oKp6z0u4; _ga=GA1.1.42792980.1700208726; a2873925c34ecbd2_gr_cs1=smallteddy; Hm_lpvt_f0faad39bcf8471e3ab3ef70125152c3=1705109952; _ga_PDVPZYN3CW=GS1.1.1705105702.37.1.1705109963.45.0.0",
            "Referer": "https://leetcode.cn/problems/construct-string-with-repeat-limit/?envType=daily-question&envId=Invalid%20Date",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `{"query":"\\n    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {\\n  problemsetQuestionList(\\n    categorySlug: $categorySlug\\n    limit: $limit\\n    skip: $skip\\n    filters: $filters\\n  ) {\\n    hasMore\\n    total\\n    questions {\\n      acRate\\n      difficulty\\n      freqBar\\n      frontendQuestionId\\n      isFavor\\n      paidOnly\\n      solutionNum\\n      status\\n      title\\n      titleCn\\n      titleSlug\\n      topicTags {\\n        name\\n        nameTranslated\\n        id\\n        slug\\n      }\\n      extra {\\n        hasVideoSolution\\n        topCompanyTags {\\n          imgUrl\\n          slug\\n          numSubscribed\\n        }\\n      }\\n    }\\n  }\\n}\\n    ","variables":{"categorySlug":"all-code-essentials","skip":0,"limit":50,"filters":{"searchKeywords":"${keyword}"}},"operationName":"problemsetQuestionList"}`,
        "method": "POST"
    }
}

module.exports = { getQuestionSearchJson }
