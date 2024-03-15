import { logger } from '#common/utils/logger/logger.js'
import { checkUpdate } from '#common/utils/update/update.js'
import { getStore, setStore } from '#common/utils/store/controller/store.js'
import { Day } from '#common/constants/date.const.js'
import {
  NpmInstall,
  PnpmInstall,
  YarnInstall,
} from '#common/constants/manager.const.js'
import { PackageName } from '#common/constants/question.const.js'

const { timestamp, hasShow } = (await getStore('checkResult')) ?? {}
if (Date.now() - timestamp <= Day || hasShow)
  process.exit(0)

const { localVersion, npmVersion, isCliUpdate } = await checkUpdate()
const needShow = false
if (isCliUpdate) {
  const installInfo = [NpmInstall, YarnInstall, PnpmInstall]
    .map(fun => fun(PackageName, true, true)) // 暂时先默认为全局
    .join('\n')
  logger.warn(
    `[leetcode-practice] 检测到新版本[ ${npmVersion} ]已经发布! 您当前的版本为[ ${localVersion} ]! 您可以执行对应的指令进行手动更新~`,
  )
  logger.info(`${installInfo}`)
}
await setStore('checkResult', { timestamp: Date.now(), hasShow: needShow })
process.exit(0)
