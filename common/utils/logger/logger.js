import chalk from 'chalk';
import { getStore } from '#common/utils/store/controller/store.js';

class LOGGER {
    isOn = true;
    constructor(_env) {
        // console.log(
        //     chalk.bgGray(`[logger init] The current env is ${env ?? 'not plugin'}.`)
        // )
    }

    /**
     * 开启
     */
    on() {
        this.isOn = true;
    }

    /**
     * 关闭
     */
    off() {
        this.isOn = false;
    }

    get forbidden() {
        return !this.isOn;
    }

    /**
     * 普通消息
     * @param message{*}
     * @param args{*[]}
     */
    info(message, ...args) {
        if (this.forbidden) return;
        console.log(chalk.whiteBright(message, ...args));
    }

    /**
     * 警告
     * @param message{*}
     * @param args{*[]}
     */
    warn(message, ...args) {
        if (this.forbidden) return;
        console.log(chalk.yellowBright(message, ...args));
    }

    /**
     * 错误信息
     * @param message{*}
     * @param args{*[]}
     */
    error(message, ...args) {
        if (this.forbidden) return;
        console.log(chalk.redBright(message, ...args));
    }
}
const { env = null } = (await getStore('config')) ?? {};
export const logger = new LOGGER(env);
