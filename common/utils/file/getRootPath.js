import path from 'node:path'
import { __dirname } from '#common/utils/file/getDirname.js'

export const rootPath = path.dirname(path.dirname(path.dirname(__dirname)))
