import inquirer from 'inquirer'
import { checkUpdate } from '#common/utils/update/update.js'
import { currentEnv } from '#common/utils/etc/checkEnv.js'
import { updateByEnv } from '#common/utils/update/updateByEnv.js'
import { logger } from '#common/utils/logger/logger.js'

export async function easyUpdateView() {
  // 1. 询问当前的环境是啥 (自动检测一次)
  // 检测到的当前环境
  const env = currentEnv()
  const envQuestion = {
    type: 'list',
    name: 'choseEnv',
    message: `自动检测到的环境为[ ${env} ],如果不是,请进行选择,如是,请按下回车确认.`,
    choices: ['cli', 'project'],
    default: env
  }
  const { choseEnv } = await inquirer.prompt(envQuestion, null)
  // 2. 检测版本更新
  const {
    localVersion = '未检出',
    npmVersion = '未检出',
    githubVersion = '未检出',
    isCliUpdate,
    isGithubUpdate
  } = await checkUpdate()
  logger.info(
    `当前版本:[ ${localVersion} ] npm包最新版本:[ ${npmVersion} ] github版本:[ ${githubVersion} ]`
  )
  let isUpdate = false
  let version = '未知'
  switch (choseEnv) {
    case 'project':
      isUpdate = isGithubUpdate
      version = githubVersion
      break
    case 'cli':
      isUpdate = isCliUpdate
      version = npmVersion
      break
    default:
      logger.warn('未知环境:', choseEnv)
      process.exit(0)
      break
  }
  // 3. 询问是否更新
  if (isUpdate) {
    const checkQuestion = {
      type: 'confirm',
      name: 'willUpdate',
      message: `检测到[ ${env} ]可更新版本[ ${version} ],是否进行更新?`
    }
    const { willUpdate } = await inquirer.prompt(checkQuestion, null)
    if (willUpdate) {
      // 4.1 选择更新
      logger.info('开始更新...')
      await updateByEnv(env)
      logger.info('更新完成~祝你使用愉快~')
    } else {
      // 4.2 取消更新
      logger.info(
        '你选择跳过此次更新,如果想要进行更新,随时可以使用参数 -u 进行更新检测!祝你使用愉快~'
      )
    }
    process.exit(0)
  } else {
    logger.info('当前已是最新版本!祝你使用愉快~')
    process.exit(0)
  }
}
