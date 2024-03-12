const username = ''
const password = ''
;(async () => {
  fetch('https://leetcode.cn/graphql/', {
    headers: {
      'content-type': 'application/json',

      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      uuuserid: '2f1c0b0f0b333d60767ea82bb413d077',
      'x-csrftoken':
        '4QUDSPOjgnbnl459D67hNjkA0SXWwqhtYNm4o4U8xpQRhtbS7c4HRHIMsSldbzCX',
      'x-definition-name': 'authSignInWithPasswordByNvc',
      cookie:
        'gr_user_id=25df956c-444d-4d2e-a152-5803cf43b17b; Hm_lvt_fa218a3ff7179639febdb15e372f411c=1706181401; _bl_uid=9klkvt9O7g38ptpq6bOLln7rOCa8; _gid=GA1.2.1183465298.1710141380; Hm_lvt_f0faad39bcf8471e3ab3ef70125152c3=1710160373,1710160721,1710166913,1710168121; a2873925c34ecbd2_gr_last_sent_sid_with_cs1=5d9012eb-d465-4d41-8a59-8f38fbda972d; a2873925c34ecbd2_gr_last_sent_cs1=hedwig; a2873925c34ecbd2_gr_session_id=5d9012eb-d465-4d41-8a59-8f38fbda972d; a2873925c34ecbd2_gr_session_id_sent_vst=5d9012eb-d465-4d41-8a59-8f38fbda972d; csrftoken=4QUDSPOjgnbnl459D67hNjkA0SXWwqhtYNm4o4U8xpQRhtbS7c4HRHIMsSldbzCX; messages=.eJyLjlaKj88qzs-Lz00tLk5MT1XSMdAxMtVRiik1M0i0iCk1TUkziik1T01OA5Jm5klAEcO0RKVYnVGNNNAYCwAe839t:1rjh9E:9ZBUJFDAUYnpTSUJbfPR_Y7DPbqMRC5VVvsxSml4w9k; _ga=GA1.1.1965599365.1672653755; _ga_PDVPZYN3CW=GS1.1.1710168129.117.1.1710169273.8.0.0; Hm_lpvt_f0faad39bcf8471e3ab3ef70125152c3=1710169280; a2873925c34ecbd2_gr_cs1=hedwig; tfstk=egaejuqYg421m6dbYc0r004rJB0KPqBb-zMSZ7VoOvD3F6LrZ82TPkNlpuyaF8UIdXNSZYDgIvwQA7ww9Py2Pe6dv7YrP4XfhZ_b9B3-rt1s7JST9pOFWzQflWFh2lhQuZ1LT6TRxvzf29-oqFV-IPwuuS91nWMwrUAxTDDckA8krPlEwxVnDUYu7Xoh4lp-sk03ykJk4Dct_x1N_MwC76pRT3my23npLfkftuxJ2Dm9PHz7p3K-vJhZh6AR.',
      Referer: 'https://leetcode.cn/accounts/login/?next=%2F'
    },
    body: `"{\"operationName\":\"signInWithPassword\",\"variables\":{\"data\":{\"username\":${username},\"password\":${password}"},\"nvcData\":\"%7B%22a%22%3A%22FFFF000000000179BB25%22%2C%22c%22%3A%221710169300231%3A0.31476334277655926%22%2C%22d%22%3A%22nvc_login%22%2C%22j%22%3A%7B%22test%22%3A1%7D%2C%22h%22%3A%7B%22umidToken%22%3A%22T2gAlUhcwhJa2vL8Q-EM61RYGZnmpm_Eumyy0KJb6n76-RMksC53vQETMoDhEOCQcAM%3D%22%7D%2C%22b%22%3A%22140%23QEODsN3jzzF0Qzo22x3%2BA6SogZWq0DDrvMhFBN6iTDKANBzsEELKoQ1HlfLdu7bCrlmzFkD1G4dWSKu7F42xmSWqlbzxYeNxMqEpzzcu01kvl3eY%2BdxFJu8hIM5fjwVLsYl2qCCB6mBmh63TR4WQhToylULSM%2FWQbNPutCCMMJqoa9d8qe7P6sk0lnpYwtnJVj7KXV7QTgqoNsiS%2Ft7BpTYNMlsYUtnQIkPCtlmf%2FHE%2FgTZgXv6E7OE8lPubtvK7V%2FlzzFzb22U3lpkziDriIXJqlaOz2PD%2BViJnzFrc2X8Kl7roHA%2Fk7SvZrI7ZbhGPlFTWwKV0KMTTXZTkbFpL42PyjuJC0sRP4z1lsGW89LLyj10adLzQVo142bUEs7w%2BgN2wUNEbMZEvQ%2Fy6EmPqbyylHKpAytRJtsEqnLoP3SXO4RCrNb4dHVzDOqaQjLI1EIAIcKKIIoBDLPSu6xPgXhrCLQsBmtoZWsgXw0vx6C8hm8kMwp%2F8rsAr6wujNgjAWrr31anRIqj0Hctoe2Jb%2FWSL7E3L4%2BZYe0sU1bXU4dIRf864Zw33S%2FhbpXppXDFZ2%2BzOd3knqO37rp2R9yZSS8EL49TGZEZUsBhDBxVySy0Zi0PvMn2fs4O0PSzWsCmbKBFUslaEd4WfGI03L%2B1Hgep8FKcfone4L3mp5weoiZke%2BoDopO17SvJVit8wAa58nH7VB3v5cUWkHoiOL3mIJzIJ3yZ0bTIGqS58EFB0NhZYLCDuEDrd1b7IozQO%2BksGfI8%2FU6oTz0tT6oCzWy5CUUMfmETRux6AxLQW9KgwpgLTjy0BL4RiGLTys0%2BvlEkA8Sr2%2BWWFhXHllkP0af%2FftWIlPgwYPWEAGah3KgcnsPsNsc5vmTt627%2F3fDQIDEAXKMa0epG78y99gsgpk5KWLkm6LcB%2FLMzyVkjalZTt2gvLqDFw0KVx1H1ZU7tC58fcOjtYrRjklT6%2Fe5HDF9dAQTviAMae%2Fui9BE3Vho6cHiItpprFvNJ54gzWVx8Rs8HoiIppOKHiMNkFsmAfbi7q3Y0k9qYkd81FBN2C1nZPl%2BOMUIvMJbgckY3tbodO0xQpRf8ffls8XnePF8yEwjS7bawkYdAfaLenHxwAMvCCoZJtS0gQZ73F6IPNXtHY4IEMAUcVAUIv8LWBafh%2FcJkZiDMlvCKWyi6N2AxTe%2F7WEzankqwgONjkdw7FrYD8hq0rhmTYaPlpF0VBOq6oYUJqI7AnoFUqjguHKnHw3JkYY6UPEmaoI6zuVPqsqD3Rj8qAqKb%2FPa%2FhVsUn3PJOaCLMWsVZcyABi86kUnH8nG443bi0R1DJECYVFIEKl5lLL7%2B%3D%22%2C%22e%22%3A%22iNqpumZixfDNfl3vG4eTFol4o-Yz0NCV4wDwlTX5hP2vnRq-SVwN3Q0vqJ5u4urXzJ_lOngNU-cY9DTeWqd1JbDHysWLFnrV818jgwHex3DsUDHo4HroN9k34vtS9tXGPAkM4OKly4afOQO7E87qB4shq707V0668SmxtguZriNGTxgkH77tt4lRpIUHey2a0BTVzh5O71q9eQZJaI-Yeg%22%7D\"},\"query\":\"mutation signInWithPassword($data: AuthSignInWithPasswordInput!, $nvcData: String!) {\\n  authSignInWithPasswordByNvc(data: $data, nvcData: $nvcData) {\\n    output {\\n      ok\\n      otpConfig {\\n        configUrl\\n        userToken\\n        __typename\\n      }\\n      passwordValidationFailedReason\\n      __typename\\n    }\\n    nvcStatus\\n    __typename\\n  }\\n}\\n\"}"`,
    method: 'POST'
  }).then((res) => {
    const cookies = res.headers.get('Set-Cookie')

    console.log(cookies)
  })
})()
