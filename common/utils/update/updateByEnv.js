import { exec } from 'node:child_process'

/**
 * 更新CLI
 * @returns {Promise<void>}
 */
export function updateCli() {
  return new Promise((resolve, reject) => {
    exec(`npm install -g leetcode-practice`, (err) => {
      if (err)
        reject(err)
      else resolve()
    })
  })
}
