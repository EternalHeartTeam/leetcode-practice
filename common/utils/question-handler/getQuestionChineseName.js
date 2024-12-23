/**
 * 拼接中文标题
 * @param question
 * @returns {`${string}.${string}`}
 */
export function getQuestionChineseName(question) {
  return `${question.id}.${question.title}`
}
