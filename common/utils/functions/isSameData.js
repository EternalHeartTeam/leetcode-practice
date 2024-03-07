/**
 * 是否为相同数据
 * @param a
 * @param b
 * @returns {this is string[]|boolean}
 */
export function isSameData(a, b) {
  const typeA = typeof a
  const typeB = typeof b
  if (typeA !== typeB)
    return false
  switch (typeA) {
    case 'bigint':
    case 'boolean':
    case 'number':
    case 'string':
    case 'symbol':
    case 'undefined':
      return a === b
    case 'function':
      return a.toString() === b.toString()
    case 'object':
      if (a === null || a === undefined)
        return a === b

      const keysA = Object.keys(a)
      const keysB = Object.keys(b)
      if (keysA.length !== keysB.length)
        return false
      return keysA.every(key => isSameData(a[key], b[key]))
  }
}
