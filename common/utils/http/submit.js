import { fetch_ } from '#common/utils/http/fetch_.js'
import { url_join } from '#common/utils/http/urlJoin.js'

/**
 * 请求 submit 提交
 * @param options
 * @param host
 * @returns {Promise<any>}
 */
export async function submit(options, host = 'https://leetcode.cn/') {
  return await fetch_(url_join(host, 'submit'), options)
}
