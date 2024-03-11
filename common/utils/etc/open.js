import os from 'node:os'
import { exec } from 'node:child_process'
import { logger } from '#common/utils/logger/logger.js'

const platform = os.platform()

/**
 * 打开浏览器
 * @param {string} url
 */
export function open(url) {
  switch (platform) {
    case 'darwin':
      exec(`open "${url}"`)
      break
    case 'win32':
      exec(`start "${url}"`)
      break
    case 'linux':
      exec(`xdg-open "${url}"`)
      break
    default:
      logger.info(`Unsupported platform: ${platform}`)
      break
  }
}
