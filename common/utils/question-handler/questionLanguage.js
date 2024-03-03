import {getStore, setStore} from "#common/utils/store/controller/store.js";
import {DefaultLang} from "#common/constants/question.const.js";

/**
 * 设置编程主语言
 */
export const setQuestionLanguage = async (lang) => {
    await setStore("language", lang);
}
/**
 * 获取当前语言 - 默认语言是JS
 */
export const getQuestionLanguage = async ()=>{
    const lang = await getStore("language")
    return lang ?? DefaultLang;
}
/**
 * 获取文件后缀
 * @param lang
 */
export const getQuestionFileExtension = (lang)=>{
    const detail = LANGUAGES.find(o=>o.name.toLowerCase()===lang.toLowerCase());
    return detail?.extension ?? '.js'
}
/**
 * 语言
 * @type {*[]}
 */
export const LANGUAGES = [
    {
        "id": 0,
        "name": "cpp",
        "extension": ".cpp"
    },
    {
        "id": 1,
        "name": "java",
        "extension": ".java"
    },
    {
        "id": 2,
        "name": "python",
        "extension": ".py"
    },
    {
        "id": 11,
        "name": "python3",
        "extension": ".py"
    },
    {
        "id": 3,
        "name": "mysql",
        "extension": ".sql"
    },
    {
        "id": 14,
        "name": "mssql",
        "extension": ".sql"
    },
    {
        "id": 15,
        "name": "oraclesql",
        "extension": ".sql"
    },
    {
        "id": 4,
        "name": "c",
        "extension": ".c"
    },
    {
        "id": 5,
        "name": "csharp",
        "extension": ".cs"
    },
    {
        "id": 6,
        "name": "javascript",
        "extension": ".js"
    },
    {
        "id": 20,
        "name": "typescript",
        "extension": ".ts"
    },
    {
        "id": 8,
        "name": "bash",
        "extension": ".sh"
    },
    {
        "id": 19,
        "name": "php",
        "extension": ".php"
    },
    {
        "id": 9,
        "name": "swift",
        "extension": ".swift"
    },
    {
        "id": 13,
        "name": "kotlin",
        "extension": ".kt"
    },
    {
        "id": 24,
        "name": "dart",
        "extension": ".dart"
    },
    {
        "id": 10,
        "name": "golang",
        "extension": ".go"
    },
    {
        "id": 7,
        "name": "ruby",
        "extension": ".rb"
    },
    {
        "id": 12,
        "name": "scala",
        "extension": ".scala"
    },
    {
        "id": 16,
        "name": "html",
        "extension": ".html"
    },
    {
        "id": 17,
        "name": "pythonml",
        "extension": ".py"
    },
    {
        "id": 18,
        "name": "rust",
        "extension": ".rs"
    },
    {
        "id": 21,
        "name": "racket",
        "extension": ".rkt"
    },
    {
        "id": 22,
        "name": "erlang",
        "extension": ".erl"
    },
    {
        "id": 23,
        "name": "elixir",
        "extension": ".ex"
    },
    {
        "id": 25,
        "name": "pythondata",
        "extension": ".py"
    },
    {
        "id": 26,
        "name": "react",
        "extension": ".jsx"
    },
    {
        "id": 27,
        "name": "vanillajs",
        "extension": ".js"
    },
    {
        "id": 28,
        "name": "postgresql",
        "extension": ".sql"
    }
]
