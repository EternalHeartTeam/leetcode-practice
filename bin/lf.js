#! /usr/bin/env node
import path from 'node:path'
import { program } from 'commander'
import { description } from '#resources/text/description.js'
import { artFontLogo } from '#resources/text/art-font-logo.js'
import { aim } from '#resources/text/aim.js'
import { lfExamples } from '#resources/text/examples.js'
import { love } from '#resources/text/love.js'
import { easyUpdateView } from '#common/view/update.view.js'
import { easyLanguageView } from '#common/view/language.view.js'
import { getQuestionLanguage } from '#common/utils/question-handler/questionLanguage.js'
import { DefaultVer } from '#common/constants/question.const.js'
import { easyFinderView } from '#common/view/finder.view.js'

const version = process.env.VERSION ?? DefaultVer
program
  .version(version)
  .description(`${description}\n${artFontLogo}\n${aim}`)
  .addHelpText('after', lfExamples + love)
  .option('-l, --language [language]', 'Set/Get the code language of question.')
  .option('-d, --directory <directory>', 'Set the question directory.')
  .option(
    '-u, --update',
    'Check the version to determine whether to update to the latest one.'
  )
  .parse(process.argv)

// const cmdArgs = program.args
const cmdOpts = program.opts()

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
// 根据dir 参数来设置基本目录
const baseDir = cmdOpts.directory
  ? path.join(process.cwd(), cmdOpts.directory)
  : process.cwd()
// 检测更新
if (cmdOpts.update) {
  await easyUpdateView()
  process.exit(0)
}
// 进入视图操作
await easyFinderView(baseDir)
process.exit(0)
