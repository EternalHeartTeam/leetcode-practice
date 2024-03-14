import chalk from 'chalk'

export class Loading {
  text = 'loading...'
  constructor(text) {
    this.frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
    this.currentFrame = 0
    this.interval = null
    this.text = text
  }

  start() {
    if (this.interval)
      clearInterval(this.interval)
    this.interval = setInterval(() => {
      process.stdout.write(
        chalk.blueBright(`\r${this.frames[this.currentFrame]} ${this.text}`),
      )

      this.currentFrame++
      if (this.currentFrame === this.frames.length)
        this.currentFrame = 0
    }, 80)
    return this
  }

  stop() {
    clearInterval(this.interval)
    process.stdout.write('\r') // 清除动画最后一帧
    return this
  }

  // 在发生异常时调用此方法清除动画
  handleException() {
    this.stop()
    return this
  }
}
