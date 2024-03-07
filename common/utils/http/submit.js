import path from 'node:path'
import { fetch_ } from '#common/utils/http/fetch_.js'

/**
 * 请求
 * @param options
 * @param host
 * @returns {Promise<any>}
 */
export async function submit(options, host = 'https://leetcode.cn/') {
  return await fetch_(path.join(host, 'submit'), options)
}
