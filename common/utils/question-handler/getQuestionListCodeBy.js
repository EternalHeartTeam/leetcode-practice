import { createQuestionById, createQuestionByTitleSlug } from '#common/utils/cli-utils/createQuestion.js';
import { getPlanQuestionList } from '#common/utils/question-getter/getPlanQuestionList.js';

// 根据 slug 获取创建promise列表
async function createSlugPromiseList(slugList, baseDir = process.cwd()) {
    return slugList.map((titleSlug) => {
        return createQuestionByTitleSlug(titleSlug, baseDir);
    });
}

// 根据 id 获取创建promise列表
async function createIdPromiseList(questionList, baseDir = process.cwd()) {
    return questionList.map((question) => {
        return createQuestionById(question.questionId, baseDir);
    });
}

/**
 * 創建題目列表通過plan slug
 * @param slug
 * @param baseDir
 */
export async function getQuestionListCodeBySlug(slug, baseDir) {
    const { planSubGroups } = await getPlanQuestionList(slug);
    const questionTitleList = planSubGroups.reduce((acc, cur) => {
        acc.push(...cur.questions.map((res) => res.titleSlug));
        return acc;
    }, []);
    const promiseList = await createSlugPromiseList(questionTitleList, baseDir);
    return await Promise.allSettled(promiseList);
}

/**
 * 創建題目列表通過tag
 * @param tagQuestionList
 * @param baseDir
 */
export async function getQuestionListCodeByTag(tagQuestionList, baseDir) {
    const promiseList = await createIdPromiseList(tagQuestionList, baseDir);
    return await Promise.allSettled(promiseList);
}
