import { logger } from '#common/utils/logger/logger.js'
import { checkUpdate } from '#common/utils/update/update.js'
import { updateCli } from '#common/utils/update/updateByEnv.js'
import inquirer from 'inquirer'

export async function easyUpdateView() {
  const { localVersion = '未检出', npmVersion = '未检出', isCliUpdate } = await checkUpdate()
  logger.info(`当前版本:[ ${localVersion} ] npm包最新版本:[ ${npmVersion} ]`)
  // 3. 询问是否更新
  if (isCliUpdate) {
    const checkQuestion = {
      type: 'confirm',
      name: 'willUpdate',
      message: `检测到可更新版本[ ${npmVersion} ],是否进行更新?`,
    }
    const { willUpdate } = await inquirer.prompt(checkQuestion, null)
    if (willUpdate) {
      // 4.1 选择更新
      logger.info('开始更新...')
      await updateCli()
      logger.info('更新完成~祝你使用愉快~')
    }
    else {
      // 4.2 取消更新
      logger.info('你选择跳过此次更新,如果想要进行更新,随时可以使用参数 -u 进行更新检测!祝你使用愉快~')
    }
    process.exit(0)
  }
  else {
    logger.info('当前已是最新版本!祝你使用愉快~')
    process.exit(0)
  }
}
