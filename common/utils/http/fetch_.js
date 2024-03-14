import { Loading } from '#common/utils/loading/loading.js'

/**
 * 基础请求-直接返回JSON格式的值
 * @param url
 * @param options {RequestInit&{loadText?:string}}
 * @returns {Promise<any>}
 * @private
 */
export async function fetch_(url, options) {
  const loader = new Loading(options.loadText ?? 'loading...')
  loader.start()
  const resp = await fetch(url, options).then((res) => res.json())
  loader.stop()
  return resp
}
