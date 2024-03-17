import path from 'node:path';
import { __dirname } from '#common/utils/file/getDirname.js';
import { currentEnv } from '#common/utils/etc/checkEnv.js';

// 在cli环境下 执行目录为 bin 目录 根目录就是上一层目录
export const rootPath = currentEnv() === 'project' ? path.dirname(path.dirname(path.dirname(__dirname))) : path.dirname(__dirname);
