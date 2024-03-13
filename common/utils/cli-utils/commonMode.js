import path from 'node:path'
import { easyUpdateView } from '#common/view/update.view.js'
import { getQuestionLanguage } from '#common/utils/question-handler/questionLanguage.js'
import { easyLanguageView } from '#common/view/language.view.js'
import { logger } from '#common/utils/logger/logger.js'

/**
 * 执行逻辑:
 * 目录检测 - 设置基础目录
 * 模式检测 - 检测是不是easy mode
 * [参数检测 - 执行对应参数]
 */
/**
 * 通用参数的执行逻辑
 * @param cmdOpts{{directory:string,language:string|boolean,easy:boolean,update:boolean,[key:string]:*}}
 * @param easyCallback{(baseDir:string)=>Promise<any>}
 * @returns {Promise<string>}
 */
export async function commonMode(cmdOpts, easyCallback) {
  // 根据dir 参数来设置基本目录
  const baseDir = cmdOpts.directory
    ? path.join(process.cwd(), cmdOpts.directory)
    : process.cwd()
  /**
   * 语言设置
   * -带参设置语言
   * -无参获取语言
   */
  if (cmdOpts.language) {
    if (cmdOpts.language !== true) {
      await easyLanguageView(cmdOpts.language)
    } else {
      const lang = await getQuestionLanguage()
      logger.info(`当前CLI语言环境为:${lang}`)
    }
    process.exit(0)
  }
  if (cmdOpts?.easy) {
    await easyCallback(baseDir)
    process.exit(0)
  }
  // 检测更新
  if (cmdOpts.update) {
    await easyUpdateView()
    process.exit(0)
  }
  return baseDir
}
