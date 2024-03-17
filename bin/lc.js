#! /usr/bin/env node
import { program } from 'commander';
import { artFontLogo } from '#resources/text/art-font-logo.js';
import { lcExamples } from '#resources/text/examples.js';
import { love } from '#resources/text/love.js';
import { aim } from '#resources/text/aim.js';
import { referMode } from '#common/utils/cli-utils/referMode.js';
import { getArgs } from '#common/utils/cli-utils/getArgs.js';
import { getQuestionToday } from '#common/utils/question-getter/getQuestionToday.js';
import { getQuestionRandom } from '#common/utils/question-getter/getQuestionRandom.js';
import { getAllQuestionList } from '#common/utils/question-getter/getAllQuestionList.js';
import { easyCreateView } from '#common/view/create.view.js';
import { description } from '#resources/text/description.js';
import { DefaultVer } from '#common/constants/question.const.js';
import { createQuestionById } from '#common/utils/cli-utils/createQuestion.js';
import { create } from '#common/utils/cli-utils/create.js';
import { commonMode } from '#common/utils/cli-utils/commonMode.js';
import { setAllQuestion } from '#common/utils/store/controller/allQuestion.js';
import { logger } from '#common/utils/logger/logger.js';

const version = process.env.VERSION ?? DefaultVer;
program
    .version(version)
    .description(`${description}\n${artFontLogo}\n${aim}`)
    .addHelpText('after', lcExamples + love)
    .arguments('[identity]')
    .option('-t, --today', 'Get a question today.')
    .option('-i, --identity <identity>', 'Specify a question by identity.')
    .option('-r, --random', 'Get a question randomly.')
    .option('-e, --easy', 'Use easy mode.')
    .option('-d, --directory <directory>', 'Set the question directory.')
    .option('-l, --language [language]', 'Set/Get the code language of question.')
    .option('-a, --all', 'Get all questions.')
    .option('-u, --update', 'Check the version to determine whether to update to the latest one.')
    .parse(process.argv);

const cmdArgs = program.args;
const cmdOpts = program.opts();
// 通用参数执行
const baseDir = await commonMode(cmdOpts, easyCreateView);
// 模式对应的action
export const callModeAction = {
    today: () => {
        getQuestionToday().then((question) => {
            create('today', question, baseDir).then(() => {
                process.exit(0);
            });
        });
    },
    random: () => {
        getQuestionRandom().then((question) => {
            create('random', question, baseDir).then(() => {
                process.exit(0);
            });
        });
    },
    identity: async (id) => {
        await createQuestionById(id, baseDir);
        process.exit(0);
    },
    all: async () => {
        const allQuestionData = await getAllQuestionList();
        await setAllQuestion(allQuestionData);
        logger.info('拉取全部题目成功!');
        process.exit(0);
    }
};
// 获取模式和参数
const mode = referMode(cmdArgs, cmdOpts);
const args = getArgs(mode, cmdArgs, cmdOpts);
// 执行指令分发
await callModeAction[mode](args);
