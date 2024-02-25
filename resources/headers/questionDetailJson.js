export function getQuestionDetailJson(slug) {
  return {
    headers: {
      accept: '*/*',
      'accept-language': 'zh-CN,zh;q=0.9',
      authorization: '',
      baggage: 'sentry-environment=production,sentry-release=dc00d92c,sentry-transaction=%2Fproblems%2F%5Bslug%5D%2F%5B%5B...tab%5D%5D,sentry-public_key=1595090ae2f831f9e65978be5851f865,sentry-trace_id=16559e227a874834b6d1a5e9dfece718,sentry-sample_rate=0.03',
      'content-type': 'application/json',
      'random-uuid': '3ba3266f-8cdc-50f8-76a8-afb018b0800f',
      'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'sentry-trace': '16559e227a874834b6d1a5e9dfece718-a48e798e3140c1dc-0',
      'x-csrftoken': 'Zms4ivZqGOCDM8rI8PE6p8uqqpYfhZeVIePkpFo8QruFlcc7cK4JxnDXZuoKdF41',
      cookie: '_bl_uid=a1lz4p9q294cs4d74npj8UU4g8p1; csrftoken=Zms4ivZqGOCDM8rI8PE6p8uqqpYfhZeVIePkpFo8QruFlcc7cK4JxnDXZuoKdF41; gr_user_id=b3bd9d67-816b-478c-b4ee-f13e289fd1b8; a2873925c34ecbd2_gr_last_sent_cs1=smallteddy; Hm_lvt_f0faad39bcf8471e3ab3ef70125152c3=1702029099,1704421023; Hm_lpvt_f0faad39bcf8471e3ab3ef70125152c3=1704447200; a2873925c34ecbd2_gr_cs1=smallteddy; _gid=GA1.2.2051268794.1704617261; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuZXh0X2FmdGVyX29hdXRoIjoiL3Byb2JsZW1zL251bWJlci1vZi1idXJnZXJzLXdpdGgtbm8td2FzdGUtb2YtaW5ncmVkaWVudHMvZGVzY3JpcHRpb24vP2VudlR5cGU9ZGFpbHktcXVlc3Rpb24mZW52SWQ9SW52YWxpZCtEYXRlIiwiX2F1dGhfdXNlcl9pZCI6IjE1MzM1NzMiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjQ2ZTQ4MjZkZWI1MDZjODg2Y2QyODA0OWJlOGFkNWM1NDZkMWMzN2Y4MDFkOTFhZGE3YzMyOGMyYjY2MDRmYjUiLCJpZCI6MTUzMzU3MywiZW1haWwiOiJ6aGFuZ3plbWluZzEyMTJAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzbWFsbHRlZGR5IiwidXNlcl9zbHVnIjoic21hbGx0ZWRkeSIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLmNuL2FsaXl1bi1sYy11cGxvYWQvdXNlcnMvc21hbGx0ZWRkeS9hdmF0YXJfMTYxNTk1MjkzNy5wbmciLCJwaG9uZV92ZXJpZmllZCI6dHJ1ZSwiX3RpbWVzdGFtcCI6MTcwMzQ4Njg4OC44NTU5OTgsImV4cGlyZWRfdGltZV8iOjE3MDYwMzY0MDAsInZlcnNpb25fa2V5XyI6MywibGF0ZXN0X3RpbWVzdGFtcF8iOjE3MDQ4NzMyMjd9.WBUYqdHAYA4tpGemeIx-Bu65l8tyxUyotgVZeoYIJAk; _ga=GA1.1.42792980.1700208726; _ga_PDVPZYN3CW=GS1.1.1704873213.32.1.1704873558.60.0.0',
      Referer: 'https://leetcode.cn/problems/minimum-string-length-after-removing-substrings/?envType=daily-question&envId=2024-01-10',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: `{"query":"\\n    query questionTranslations($titleSlug: String!) {\\n  question(titleSlug: $titleSlug) {\\n    translatedTitle\\n    translatedContent\\n  }\\n}\\n    ","variables":{"titleSlug":"${slug}"},"operationName":"questionTranslations"}`,
    method: 'POST',
  };
}
