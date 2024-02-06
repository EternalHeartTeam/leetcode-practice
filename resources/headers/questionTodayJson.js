export function getQuestionTodayJson() {
  return {
    headers: {
      accept: '*/*',
      'accept-language': 'zh-CN,zh;q=0.9',
      authorization: '',
      baggage: 'sentry-environment=production,sentry-release=dc00d92c,sentry-transaction=%2Fproblemset%2F%5B%5B...slug%5D%5D,sentry-public_key=1595090ae2f831f9e65978be5851f865,sentry-trace_id=ba393efa1eea41d4969fc786e395ab6e,sentry-sample_rate=0.03',
      'content-type': 'application/json',
      'random-uuid': '3ba3266f-8cdc-50f8-76a8-afb018b0800f',
      'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'sentry-trace': 'ba393efa1eea41d4969fc786e395ab6e-8b7475c76892197e-0',
      'x-csrftoken': 'Zms4ivZqGOCDM8rI8PE6p8uqqpYfhZeVIePkpFo8QruFlcc7cK4JxnDXZuoKdF41',
      cookie: '_bl_uid=a1lz4p9q294cs4d74npj8UU4g8p1; csrftoken=Zms4ivZqGOCDM8rI8PE6p8uqqpYfhZeVIePkpFo8QruFlcc7cK4JxnDXZuoKdF41; gr_user_id=b3bd9d67-816b-478c-b4ee-f13e289fd1b8; a2873925c34ecbd2_gr_last_sent_cs1=smallteddy; _gid=GA1.2.2051268794.1704617261; _ga=GA1.1.42792980.1700208726; _ga_PDVPZYN3CW=GS1.1.1704886059.33.0.1704886061.58.0.0; messages=W1siX19qc29uX21lc3NhZ2UiLDAsMjUsIlx1NjBhOFx1NWRmMlx1N2VjZlx1NzY3Ylx1NTFmYSJdXQ:1rNWkI:1nVd_sKKmyTppZxAsssinmGIk4G90lUMosacBL3WG_A; a2873925c34ecbd2_gr_session_id=0518b7a0-93b3-40da-a75d-c2fa87dbafbf; a2873925c34ecbd2_gr_last_sent_sid_with_cs1=0518b7a0-93b3-40da-a75d-c2fa87dbafbf; a2873925c34ecbd2_gr_cs1=smallteddy; a2873925c34ecbd2_gr_session_id_sent_vst=0518b7a0-93b3-40da-a75d-c2fa87dbafbf; Hm_lvt_f0faad39bcf8471e3ab3ef70125152c3=1704421023; Hm_lpvt_f0faad39bcf8471e3ab3ef70125152c3=1704886064',
      Referer: 'https://leetcode.cn/problemset/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: '{"query":"\\n    query questionOfToday {\\n  todayRecord {\\n    date\\n    userStatus\\n    question {\\n      questionId\\n      frontendQuestionId: questionFrontendId\\n      difficulty\\n      title\\n      titleCn: translatedTitle\\n      titleSlug\\n      paidOnly: isPaidOnly\\n      freqBar\\n      isFavor\\n      acRate\\n      status\\n      solutionNum\\n      hasVideoSolution\\n      topicTags {\\n        name\\n        nameTranslated: translatedName\\n        id\\n      }\\n      extra {\\n        topCompanyTags {\\n          imgUrl\\n          slug\\n          numSubscribed\\n        }\\n      }\\n    }\\n    lastSubmission {\\n      id\\n    }\\n  }\\n}\\n    ","variables":{},"operationName":"questionOfToday"}',
    method: 'POST',
  };
}

