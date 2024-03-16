/**
 * 获取题目的路径
 * @param question
 * @returns {string}
 */
export function getQuestionFileName(question) {
    if (!question || !question?.id) return '';
    return `${question.id}.${question.slug}`;
}
