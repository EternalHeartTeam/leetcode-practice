import { getStore, setStore } from '#common/utils/store/controller/store.js'
import { DefaultLang } from '#common/constants/question.const.js'

/**
 * 语言
 * @type {*[]}
 */
export const LANGUAGES = [
  {
    id: 0,
    name: 'cpp',
    extension: '.cpp',
    blockComment: '/*\n*\n*/', // 块级注释 使用换行符来分割
    lineComment: '//', // 行级注释 不需要分割
  },
  {
    id: 1,
    name: 'java',
    extension: '.java',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 2,
    name: 'python',
    extension: '.py',
    blockComment: '\'\'\'\n\n\'\'\'',
    lineComment: '#',
  },
  {
    id: 11,
    name: 'python3',
    extension: '.py',
    blockComment: '\'\'\'\n\n\'\'\'',
    lineComment: '#',
  },
  {
    id: 3,
    name: 'mysql',
    extension: '.sql',
    blockComment: '/*\n*\n*/',
    lineComment: '--',
  },
  {
    id: 14,
    name: 'mssql',
    extension: '.sql',
    blockComment: '/*\n*\n*/',
    lineComment: '--',
  },
  {
    id: 15,
    name: 'oraclesql',
    extension: '.sql',
    blockComment: '/*\n*\n*/',
    lineComment: '--',
  },
  {
    id: 4,
    name: 'c',
    extension: '.c',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 5,
    name: 'csharp',
    extension: '.cs',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 6,
    name: 'javascript',
    extension: '.js',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 20,
    name: 'typescript',
    extension: '.ts',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 8,
    name: 'bash',
    extension: '.sh',
    blockComment: '\'\'\'\n\n\'\'\'',
    lineComment: '#',
  },
  {
    id: 19,
    name: 'php',
    extension: '.php',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 9,
    name: 'swift',
    extension: '.swift',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 13,
    name: 'kotlin',
    extension: '.kt',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 24,
    name: 'dart',
    extension: '.dart',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 10,
    name: 'golang',
    extension: '.go',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 7,
    name: 'ruby',
    extension: '.rb',
    blockComment: '=begin\n\n=end',
    lineComment: '#',
  },
  {
    id: 12,
    name: 'scala',
    extension: '.scala',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 16,
    name: 'html',
    extension: '.html',
    blockComment: '<!--\n\n-->',
    lineComment: '',
  },
  {
    id: 17,
    name: 'pythonml',
    extension: '.py',
    blockComment: '\'\'\'\n\n\'\'\'',
    lineComment: '#',
  },
  {
    id: 18,
    name: 'rust',
    extension: '.rs',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 21,
    name: 'racket',
    extension: '.rkt',
    blockComment: ';;\n\n;;',
    lineComment: '',
  },
  {
    id: 22,
    name: 'erlang',
    extension: '.erl',
    blockComment: '%%\n\n%%',
    lineComment: '',
  },
  {
    id: 23,
    name: 'elixir',
    extension: '.ex',
    blockComment: '#\n#\n#',
    lineComment: '',
  },
  {
    id: 25,
    name: 'pythondata',
    extension: '.py',
    blockComment: '\'\'\'\n\n\'\'\'',
    lineComment: '#',
  },
  {
    id: 26,
    name: 'react',
    extension: '.jsx',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 27,
    name: 'vanillajs',
    extension: '.js',
    blockComment: '/*\n*\n*/',
    lineComment: '//',
  },
  {
    id: 28,
    name: 'postgresql',
    extension: '.sql',
    blockComment: '/*\n*\n*/',
    lineComment: '--',
  },
]
/**
 * 设置编程主语言
 */
export async function setQuestionLanguage(lang = DefaultLang) {
  await setStore('language', lang)
}
/**
 * 获取当前语言 - 默认语言是JS
 */
export async function getQuestionLanguage() {
  const lang = await getStore('language')
  return lang ?? DefaultLang
}

/**
 * 获取语言对象中的一个
 * @param lang
 * @returns {*}
 */
export function getLang(lang) {
  return LANGUAGES.find(o => o.name.toLowerCase() === lang.toLowerCase())
}
/**
 * 获取文件后缀
 * @param lang
 */
export function getQuestionFileExtension(lang = DefaultLang) {
  const detail = getLang(lang)
  return detail?.extension
}

/**
 * 获取行注释
 * @param lang
 * @returns {*}
 */
export function getLineComment(lang = DefaultLang) {
  const langObj = getLang(lang)
  if (langObj.lineComment !== '') {
    return langObj.lineComment
  }
  else {
    // 因为保底是都有块级注释的
    return null
  }
}

/**
 * 获取块级注释
 * @param lang
 * @returns {*}
 */
export function getBlockComment(lang = DefaultLang) {
  const langObj = getLang(lang)
  return langObj.blockComment
}

/**
 * 设置行注释
 * @param lang
 * @param comment
 * @returns {*}
 */
export function setLineComment(lang = DefaultLang, comment = '') {
  const lineComment = getLineComment(lang)
  if (lineComment !== null) {
    const lines = comment.split('\n')
    return lines.reduce((p, line) => (p += `${lineComment} ${line}\n`), '')
  }
  else {
    return setBlockComment(lang, comment)
  }
}

/**
 * 设置块注释
 * @param lang
 * @param comment
 * @returns {*}
 */
export function setBlockComment(lang = DefaultLang, comment = '') {
  const block = getBlockComment(lang)
  const splitter = block.split('\n')
  const lines = comment.split('\n')
  switch (splitter.length) {
    case 3: {
      const start = splitter[0]
      const end = splitter[2]
      const startTag = splitter[1]
      const content = lines.reduce(
        (p, line) => (p += `${startTag} ${line}\n`),
        '',
      )
      return `${start}\n${content}${end}\n`
    }
    default:
      return comment
  }
}
