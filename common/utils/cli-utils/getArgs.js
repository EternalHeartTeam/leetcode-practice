// 获取模式对应的参数
export function getArgs(mode, cmdArgs, cmdOpts) {
    switch (mode) {
        case 'identity':
            return cmdArgs.length ? cmdArgs.join(' ') : cmdOpts?.identity;
        case 'random':
        case 'today':
        default:
            return null;
    }
}
