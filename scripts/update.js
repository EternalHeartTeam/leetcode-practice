// 更新脚本 默认是项目中
import inquirer from 'inquirer'
import { checkUpdate } from '#common/utils/update/update.js'
import { updateProject } from '#common/utils/update/updateByEnv.js'
import { logger } from '#common/utils/logger/logger.js'

const { isGithubUpdate, githubVersion, localVersion } = await checkUpdate()
logger.info(`当前版本: [${localVersion}] github版本: [${githubVersion}] `)
if (isGithubUpdate) {
  const checkQuestion = {
    type: 'confirm',
    name: 'willUpdate',
    message: `是否进行更新?`
  }
  const { willUpdate } = await inquirer.prompt(checkQuestion, null)
  if (willUpdate) {
    // 4.1 选择更新
    logger.info('开始更新...')
    await updateProject()
    logger.info('更新完成~祝你使用愉快~')
  } else {
    // 4.2 取消更新
    logger.info(
      '你选择跳过此次更新,如果想要进行更新,随时可以使用参数 -u 进行更新检测!祝你使用愉快~'
    )
  }
  process.exit(0)
} else {
  logger.info('当前版本为最新版本~无需更新!')
}
process.exit(0)
