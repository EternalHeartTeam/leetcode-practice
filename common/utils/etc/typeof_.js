/**
 * 修复null的类型检测
 * @param data
 * @returns {"undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"bigint"|string}
 * @private
 */
export function typeof_(data) {
  if (data === null) return 'null'
  else return typeof data
}
