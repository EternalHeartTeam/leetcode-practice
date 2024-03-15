/**
 * @description npm 的安装指令
 * @param packageName
 * @param isUpdate
 * @param isGlobal
 * @returns {string}
 * @constructor
 */
export function NpmInstall(packageName, isUpdate, isGlobal) {
  return `npm ${isUpdate ? 'update' : 'install'} ${isGlobal ? '-g' : ''} ${packageName}`
}

/**
 * @description yarn 的安装指令
 * @param packageName
 * @param isUpdate
 * @param isGlobal
 * @returns {string}
 * @constructor
 */
export function YarnInstall(packageName, isUpdate, isGlobal) {
  return `yarn ${isGlobal ? 'global' : ''} ${isUpdate ? 'upgrade' : 'add'} ${packageName}`
}

/**
 * @description pnpm 的安装指令
 * @param packageName
 * @param isUpdate
 * @param isGlobal
 * @returns {string}
 * @constructor
 */
export function PnpmInstall(packageName, isUpdate, isGlobal) {
  return `pnpm ${isGlobal ? 'global' : ''} ${isUpdate ? 'update' : 'install'} ${packageName}`
}
