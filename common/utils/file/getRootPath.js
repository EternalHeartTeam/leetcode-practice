import path from 'node:path'
import { __dirname } from '#common/utils/file/getDirname.js'
import { currentEnv } from '#common/utils/etc/checkEnv.js'
import { PackageName } from '#common/constants/question.const.js'

export const rootPath =
  currentEnv() === 'project'
    ? path.dirname(path.dirname(path.dirname(__dirname)))
    : path.join(path.dirname(__dirname), PackageName)
