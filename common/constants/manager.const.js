/**
 * npm 的安装指令
 * @param packageName
 * @param isUpdate
 * @param isGlobal
 * @returns {`npm ${string} ${string} ${string}`}
 * @constructor
 */
export function NpmInstall(packageName, isUpdate, isGlobal) {
  return `npm ${isUpdate ? 'update' : 'install'} ${isGlobal ? '-g' : ''} ${packageName}`
}

/**
 * yarn 的安装指令
 * @param packageName
 * @param isUpdate
 * @param isGlobal
 * @returns {`yarn ${string} ${string} ${string}`}
 * @constructor
 */
export function YarnInstall(packageName, isUpdate, isGlobal) {
  return `yarn ${isGlobal ? 'global' : ''} ${isUpdate ? 'upgrade' : 'add'} ${packageName}`
}

/**
 * pnpm 的安装指令
 * @param packageName
 * @param isUpdate
 * @param isGlobal
 * @returns {`pnpm ${string} ${string} ${string}`}
 * @constructor
 */
export function PnpmInstall(packageName, isUpdate, isGlobal) {
  return `pnpm ${isGlobal ? 'global' : ''} ${isUpdate ? 'update' : 'install'} ${packageName}`
}
