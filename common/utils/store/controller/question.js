import { exeOnce } from '#common/utils/store/store-realm.js'

/**
 * 根据模式读取对象
 * @param mode
 * @returns {unknown}
 */
export function getQuestionByMode(mode) {
  return exeOnce((realm) => {
    const all = realm.objects('Question')
    const question = all.filtered('mode=$0', mode)?.[0]
    return question?.toJSON()
  })
}
/**
 * 存对象
 * @param mode
 * @param question
 * @returns {*}
 */
export function setQuestion(mode, question) {
  return exeOnce((realm) => {
    let newQuestion
    realm.write(() => {
      realm.delete(realm.objects('Question').filtered('mode=$0', mode))
      newQuestion = realm.create('Question', Object.assign(question, { mode }))
    })
    return newQuestion.toJSON()
  })
}
/**
 * 删除某一个模式
 * @param mode
 */
export function deleteQuestionByMode(mode) {
  return exeOnce((realm) => {
    realm.write(() => {
      const modes = realm.objects('Question').filtered('mode=$0', mode)
      realm.delete(modes)
    })
  })
}
/**
 * 删除全部
 */
export function deleteAllQuestion() {
  return exeOnce((realm) => {
    realm.write(() => {
      realm.delete(realm.objects('Question'))
    })
  })
}
