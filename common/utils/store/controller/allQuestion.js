import { exeOnce } from '#common/utils/store/store-realm.js'

/**
 * 根据模式读取对象
 * @returns {unknown}
 */
export function getAllQuestion() {
  return exeOnce((realm) => {
    const all = realm.objects('AllQuestion')
    return all?.toJSON()
  })
}

/**
 * 存对象
 * @param question
 * @returns {*}
 */
export function setAllQuestion(allQuestionData) {
  return exeOnce((realm) => {
    realm.write(() => {
      realm.create('AllQuestion', allQuestionData)
    })
  })
}

/**
 * 删除全部
 */
export function deleteAllQuestion() {
  return exeOnce((realm) => {
    realm.write(() => {
      realm.delete(realm.objects('AllQuestion'))
    })
  })
}
