import chalk from 'chalk'
import { getStore } from '#common/utils/store/controller/store.js'

class Logger {
  constructor(env) {
    console.log(
      chalk.bgGray(`[logger init] The current env is ${env ?? 'not plugin'}.`)
    )
  }

  info(message) {
    console.log(chalk.blue(message))
  }

  warn(message) {
    console.log(chalk.yellow(message))
  }

  error(message) {
    console.log(chalk.red(message))
  }
}
const { env = null } = (await getStore('config')) ?? {}
export const logger = new Logger(env)
