const { createQuestion } = require("../utils/createQuestion");

/**
 * 工作区为 根目录
 */
const args = process.argv.slice(2);
const newPath = args[0];
createQuestion(newPath)
