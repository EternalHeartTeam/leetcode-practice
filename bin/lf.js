#! /usr/bin/env node
import { program } from 'commander';
import { description } from '#resources/text/description.js';
import { artFontLogo } from '#resources/text/art-font-logo.js';
import { aim } from '#resources/text/aim.js';
import { lfExamples } from '#resources/text/examples.js';
import { love } from '#resources/text/love.js';
import { DefaultVer } from '#common/constants/question.const.js';
import { easyFinderView } from '#common/view/finder.view.js';
import { commonMode } from '#common/utils/cli-utils/commonMode.js';
import { willUse } from '#common/utils/etc/willUse.js';

const version = process.env.VERSION ?? DefaultVer;
program
    .version(version)
    .description(`${description}\n${artFontLogo}\n${aim}`)
    .addHelpText('after', lfExamples + love)
    .option('-e, --easy', 'Use easy mode.')
    .option('-d, --directory <directory>', 'Set the question directory.')
    .option('-l, --language [language]', 'Set/Get the code language of question.')
    .option('-v, --ver', 'Check the version info and some extra info about leetcode-practice.')
    .option('-u, --update', 'Check the version to determine whether to update to the latest one.')
    .parse(process.argv);

const cmdArgs = program.args;
const cmdOpts = program.opts();
// 通用参数执行
const baseDir = await commonMode(cmdOpts, easyFinderView);
await easyFinderView(baseDir);
willUse(cmdArgs, baseDir);
process.exit(0);
