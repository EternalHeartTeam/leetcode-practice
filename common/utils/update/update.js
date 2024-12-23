import fs from 'node:fs'
import path from 'node:path'
import { GITEE_URL, GITHUB_HOST, GITHUB_RAW, NPM_REGISTRY_URL, PackageName } from '#common/constants/question.const.js'
import { rootPath } from '#common/utils/file/getRootPath.js'
import { fetch_ } from '#common/utils/http/fetch_.js'
import { url_join } from '#common/utils/http/urlJoin.js'

// npm 中的 包地址
const npmUrl = url_join(NPM_REGISTRY_URL, PackageName)
const githubUrl = url_join(GITHUB_RAW, GITHUB_HOST, PackageName, 'master/package.json')
const giteeUrl = url_join(GITEE_URL, GITHUB_HOST, PackageName, 'raw', 'master/package.json')

/**
 * 获取远端npm库中的版本号
 */
export async function getNpmVersion() {
  try {
    const res = await fetch_(npmUrl, { method: 'GET' })
    return res['dist-tags']?.latest || null
  }
  catch (e) {
    console.error('Error fetching npm version:', e)
    return null
  }
}

/**
 * 获取github的最新提交sha
 * @returns {Promise<string|null>}
 */
export async function getGithubVersion() {
  try {
    const results = await Promise.allSettled([
      fetch_(githubUrl, { method: 'GET' }),
      fetch_(giteeUrl, { method: 'GET' }),
    ])

    for (const result of results) {
      if (result.status === 'fulfilled' && result.value?.version) {
        return result.value.version
      }
    }
    return null
  }
  catch (e) {
    console.error('Error fetching GitHub version:', e)
    return null
  }
}

export function getLocalVersion() {
  try {
    const packageJsonPath = path.resolve(rootPath, 'package.json')
    const { version } = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
    return version
  }
  catch (e) {
    console.error('Error reading local version:', e)
    return null
  }
}

/**
 * 检测整体的更新状况
 * @returns {Promise<{localVersion: string|null, npmVersion: string|null, githubVersion: string|null, isCliUpdate: boolean, isGithubUpdate: boolean}>}
 */
export async function checkUpdate() {
  const [remote, github, local] = await Promise.all([
    getNpmVersion(),
    getGithubVersion(),
    Promise.resolve(getLocalVersion()),
  ])

  return {
    localVersion: local,
    npmVersion: remote,
    githubVersion: github,
    isCliUpdate: remote !== null && remote !== local,
    isGithubUpdate: github !== null && github !== local,
  }
}
