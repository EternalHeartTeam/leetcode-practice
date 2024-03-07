import { exec } from 'node:child_process'

/**
 * 执行模板指令 接受外部变量
 * 在调用的地方 获取外部参数 传入模板参数
 * @param temCommand
 * @param args
 * @returns {Promise<unknown>}
 */
export function temExe(temCommand, ...args) {
  !args?.length && (args = process.argv?.slice(2))
  return new Promise((resolve, reject) => {
    const command = temCommand.replace(/\{\d+}/g, (match) => {
      const argIndex = Number(match.slice(1, -1))
      return args[argIndex]
    })
    exec(command, (error, stdout, stderr) => {
      if (error)
        reject(error.message)
      else if (stderr)
        reject(stderr)
      else
        resolve(stdout)
    })
  })
}
