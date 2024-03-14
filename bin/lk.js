#! /usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { program } from 'commander'
import select from '@inquirer/select'
import { artFontLogo } from '#resources/text/art-font-logo.js'
import { lkExamples } from '#resources/text/examples.js'
import { love } from '#resources/text/love.js'
import { aim } from '#resources/text/aim.js'
import { referMode } from '#common/utils/cli-utils/referMode.js'
import { getArgs } from '#common/utils/cli-utils/getArgs.js'
import { checkQuestionByPath } from '#common/utils/question-handler/checkQuestionByPath.js'
import { getQuestionByMode } from '#common/utils/store/controller/question.js'
import { getQuestionFileName } from '#common/utils/question-handler/getQuestionFileName.js'
import { getQuestionChineseName } from '#common/utils/question-handler/getQuestionChineseName.js'
import { easyCheckView } from '#common/view/check.view.js'
import { description } from '#resources/text/description.js'
import { getQuestionFileExtension } from '#common/utils/question-handler/questionLanguage.js'
import { DefaultLang, DefaultVer } from '#common/constants/question.const.js'
import { logger } from '#common/utils/logger/logger.js'
import { commonMode } from '#common/utils/cli-utils/commonMode.js'
import { getFilePathById } from '#common/utils/file/getFilePathById.js'
import { getQuestionFileInDir } from '#common/utils/file/getQuestionInDir.js'

const version = process.env.VERSION ?? DefaultVer
program
  .version(version)
  .description(`${description}\n${artFontLogo}\n${aim}`)
  .addHelpText('after', lkExamples + love)
  .arguments('[identity]')
  .option('-t, --today', 'Check the question today.')
  .option(
    '-i, --identity <identity>',
    'Check the specified question by identity.',
  )
  .option('-r, --random', 'Check the last random question.')
  .option('-e, --easy', 'Use easy mode.')
  .option('-d, --directory <directory>', 'Set the question directory.')
  .option('-l, --language [language]', 'Set/Get the code language of question.')
  .option(
    '-u, --update',
    'Check the version to determine whether to update to the latest one.',
  )
  .parse(process.argv)

const cmdArgs = program.args
const cmdOpts = program.opts()
// 获取模式和参数
const mode = referMode(cmdArgs, cmdOpts)
const args = getArgs(mode, cmdArgs, cmdOpts)
// 通用参数执行
const baseDir = await commonMode(cmdOpts, easyCheckView)
// 检测函数
async function check(mode, question) {
  if (!question) {
    logger.info('题目信息不存在,请使用lc指令进行创建~')
    return false
  }
  const filePath = path.join(
    baseDir,
    getQuestionFileName(question),
    `question${getQuestionFileExtension(question?.lang)}`,
  )
  if (!fs.existsSync(filePath)) {
    logger.info(`文件[${filePath}]不存在,请确保已经创建!`)
  }
  else {
    logger.info(
      `MODE: ${mode}\n题目[${getQuestionChineseName(question)}]检查结果:`,
    )
    await checkQuestionByPath(filePath)
  }
  return true
}
// 模式对应的action
const callModeAction = {
  today: async () => {
    const question = await getQuestionByMode('today')
    await check('today', question)
    process.exit(0)
  },
  random: async () => {
    const question = await getQuestionByMode('random')
    await check('random', question)
    process.exit(0)
  },
  identity: async (id) => {
    let question
    if (!id) {
      // 如果未指定id说明是要检测模式创建的题目
      question = await getQuestionByMode(mode)
      await check('identity', question)
    }
    else {
      question = await getFilePathById(id)
      const needToSelect = {
        type: 'list',
        name: 'need',
        message: `在当前目录下存在id为[${id}]的题目副本，请选择你要检查的副本:`,
        choices: [],
      }
      /**
       * 只检查一个题目
       * @param fileOrFiles
       * @returns {Promise<void>}
       */
      const checkOne = async (fileOrFiles) => {
        const needToCheck = {
          type: 'list',
          name: 'check',
          message: '当前题目目录中存在多个题目文件副本，请选择一个进行检查:',
          choices: [],
          default: null,
        }
        let filePath
        switch (typeof fileOrFiles) {
          case 'undefined':
            logger.warn(
              `虽然在题目目录中，但当前目录下不存在[${id}]的题目文件！`,
            )
            process.exit(0)
            break
          case 'string':
            filePath = fileOrFiles
            break
          case 'object':
            needToCheck.choices = fileOrFiles.map((o) => {
              return { name: o, value: o }
            })
            needToCheck.default = fileOrFiles?.find(o =>
              o.endsWith(getQuestionFileExtension(DefaultLang)),
            )
            filePath = await select(needToCheck)
            break
        }
        return await checkQuestionByPath(filePath)
      }

      let files
      let which
      switch (typeof question) {
        case 'undefined':
          logger.warn(`当前目录下未找到题目id为[${id}]的题目！`)
          process.exit(0)
          break
        case 'string':
          files = getQuestionFileInDir(path.resolve(baseDir, question))
          break
        case 'object':
          needToSelect.choices = question.map((o) => {
            return { name: o, value: o }
          })
          which = await select(needToSelect)
          files = getQuestionFileInDir(path.resolve(baseDir, which))
          break
      }
      await checkOne(files)
    }
    process.exit(0)
  },
}
// 执行指令分发
callModeAction[mode](args)
