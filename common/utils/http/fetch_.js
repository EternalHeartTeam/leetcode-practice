import { Loading } from '#common/utils/loading/loading.js'
import ora from 'ora'

/**
 * 基础请求-直接返回JSON格式的值
 * @param url
 * @param options {RequestInit&{loadText?:string}}
 * @returns {Promise<any>}
 * @private
 */
export async function fetch_(url, options) {
  const loader = ora(options.loadText ?? 'loading...').start()
  const resp = await fetch(url, options).then((res) => res.json())
  loader.stop()
  return resp
}
