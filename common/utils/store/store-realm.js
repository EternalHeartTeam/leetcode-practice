import { readdirSync, rmSync } from 'node:fs'
import path from 'node:path'
import { rootPath } from '#common/utils/file/getRootPath.js'
import { AllQuestion } from '#common/utils/store/schemas/allQuestion.js'
import { Question } from '#common/utils/store/schemas/question.js'
import { Store } from '#common/utils/store/schemas/store.js'
import Realm from 'realm'

const localPath = path.resolve(rootPath, 'resources/stores/store.realm')
/**
 * 开启
 * @returns {Promise<Realm>}
 */
export async function open() {
  let realm
  try {
    realm = await Realm.open({
      schema: [Question, AllQuestion, Store],
      path: localPath,
    })
  }
  catch (e) {
    if (e?.message?.includes('Migration'))
      await cleanStore()

    realm = await Realm.open({
      schema: [Question, AllQuestion, Store],
      path: localPath,
    })
  }
  return realm
}
/**
 * 执行一次
 * @param callback
 * @returns {Promise<void>}
 */
export async function exeOnce(callback) {
  const realm = await open()
  const res = await callback(realm)
  realm.close()
  return res
}
/**
 * 清理缓存
 * @returns {Promise<unknown>}
 */
export function cleanStore() {
  return new Promise((resolve) => {
    const dir = path.dirname(localPath)
    const files = readdirSync(dir)
    files.forEach((file) => {
      rmSync(path.resolve(dir, file), { recursive: true, force: true })
    })
    resolve()
  })
}
