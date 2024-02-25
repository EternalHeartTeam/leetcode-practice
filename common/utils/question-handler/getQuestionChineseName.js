/**
 * 拼接中文标题
 * @param question
 * @returns {`${string}.${string}`}
 */
export const getQuestionChineseName = (question)=>{
    return `${question.id}.${question.title}`;
}