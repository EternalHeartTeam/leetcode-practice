import fs from 'node:fs'
import path from 'node:path'
import { rootPath } from '#common/utils/file/getRootPath.js'
import {
  GITEE_URL,
  GITHUB_HOST,
  GITHUB_RAW,
  NPM_URL,
  PackageName,
} from '#common/constants/question.const.js'
import { url_join } from '#common/utils/http/urlJoin.js'
import { fetch_ } from '#common/utils/http/fetch_.js'

// npm 中的 包地址
const npmUrl = url_join(NPM_URL, PackageName)
const githubUrl = url_join(
  GITHUB_RAW,
  GITHUB_HOST,
  PackageName,
  'master/package.json',
)
const giteeUrl = url_join(
  GITEE_URL,
  GITHUB_HOST,
  PackageName,
  'raw',
  'master/package.json',
)

/**
 * 获取远端npm库中的版本号
 */
export async function getNpmVersion() {
  try {
    const res = await fetch_(npmUrl, { method: 'GET' })
    console.log('获取NPM版本成功！======', res['dist-tags']?.latest)
    return res['dist-tags']?.latest
  }
  catch (e) {
    console.log('获取NPM版本失败！')
    throw new Error(e)
  }
}
/**
 * 获取github的最新提交sha
 * @returns {Promise<unknown>}
 */
export async function getGithubVersion() {
  try {
    const [{ reason: _1, value: github }, { reason: _2, value: gitee }]
      = await Promise.allSettled([
        fetch_(githubUrl, { method: 'GET' }),
        fetch_(giteeUrl, { method: 'GET' }),
      ])
    const ver = github?.version ?? gitee?.version
    console.log('获取Github版本成功！======', ver)
    return ver
  }
  catch (e) {
    console.log('获取Github版本失败！', e)
    throw new Error(e)
  }
}
export function getLocalVersion() {
  try {
    const { version } = JSON.parse(
      fs.readFileSync(path.resolve(rootPath, 'package.json'), 'utf-8'),
    )
    console.log('本地版本号获取成功!======', version)
    return version
  }
  catch (e) {
    console.log('本地版本号获取失败!')
    return false
  }
}
/**
 * 检测整体的更新状况
 * @returns {Promise<{localVersion: (any|boolean), githubVersion: *, isCliUpdate: boolean, remoteVersion: unknown, isGithubUpdate: boolean}>}
 */
export async function checkUpdate() {
  const remote = await getNpmVersion()
  const github = await getGithubVersion()
  const local = getLocalVersion()
  return {
    localVersion: local,
    npmVersion: remote,
    githubVersion: github,
    isCliUpdate: remote !== local,
    isGithubUpdate: github !== local,
  }
}
