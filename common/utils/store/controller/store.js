import { exeOnce } from '#common/utils/store/store-realm.js'
import { typeof_ } from '#common/utils/etc/typeof_.js'

/**
 * 转化数据到特殊格式字符串
 * @param data
 * @returns {string}
 */
function convData(data) {
  const type = typeof_(data)
  const dataStr = type === 'object' ? JSON.stringify(data) : data.toString()
  const prefix = `$<${type}>$`
  return prefix + dataStr
}
/**
 * 转化字符串到数据
 * @param dataStr
 * @returns {any}
 */
function parseData(dataStr) {
  const prefixReg = /^\$<.+>\$/im
  if (!prefixReg.test(dataStr))
    return null

  const type = dataStr.match(prefixReg)[0].replace(/[$<>]+/g, '')
  const remainStr = dataStr.replace(prefixReg, '')
  switch (type) {
    case 'object':
      return JSON.parse(remainStr)
    case 'bigint':
      return BigInt(remainStr)
    case 'boolean':
      return remainStr === 'true'
    case 'number':
      return Number(remainStr)
    case 'function':
      return Function(remainStr)
    case 'string':
    default:
      return remainStr
  }
}

/**
 * 设置一项记录
 * @param key
 * @param value
 * @returns {Promise<void>}
 */
export function setStore(key, value) {
  return exeOnce((realm) => {
    let newStore
    realm.write(() => {
      const oldStore = realm.objects('Store').filtered(`key = "${key}"`)?.[0]
      oldStore && realm.delete(oldStore)
      newStore = realm.create('Store', { key, value: convData(value) })
    })
    return newStore.toJSON()
  })
}

/**
 * 获取记录值
 * @param key
 * @returns {Promise<void>}
 */
export function getStore(key) {
  return exeOnce((realm) => {
    const all = realm.objects('Store')
    const storeObj = all.filtered('key=$0', key)?.[0]?.toJSON()
    return parseData(storeObj?.value)
  })
}

/**
 * 删除某一项记录
 * @param key
 * @returns {Promise<void>}
 */
export function deleteStore(key) {
  return exeOnce((realm) => {
    realm.write(() => {
      realm.delete(realm.objects('Store').filtered('key=$0', key))
    })
  })
}

/**
 * 清理全部缓存
 * @param mode
 * @returns {Promise<void>}
 */
export function clearStore(mode) {
  return exeOnce((realm) => {
    realm.write(() => {
      realm.delete(realm.objects('Store'))
    })
  })
}
