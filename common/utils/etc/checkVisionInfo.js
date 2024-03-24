import { DefaultVer, GITHUB_HOST, GITHUB_URL, NPM_URL, PackageName } from '#common/constants/question.const.js';
import { rootPath } from '#common/utils/file/getRootPath.js';
import { logger } from '#common/utils/logger/logger.js';
import { getQuestionLanguage } from '#common/utils/question-handler/questionLanguage.js';
import { url_join } from '#common/utils/http/urlJoin.js';
import { aim } from '#resources/text/aim.js';

/**
 * 检查版本信息 加一些额外输出
 */
export async function checkVisionInfo() {
    const version = process.env.VERSION ?? DefaultVer;
    const location = rootPath;
    const lang = await getQuestionLanguage();
    logger.info(`version: ${version}\nlanguage: ${lang}\nlocation: file://${location}\ngithub: ${url_join(GITHUB_URL, GITHUB_HOST, PackageName)}\nnpm: ${url_join(NPM_URL, 'package', PackageName)}\n\n${aim}`);
}
