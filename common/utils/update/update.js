import https from "https";
import {rootPath} from "#common/utils/file/getRootPath.js";
import fs from "fs";
import path from "path";
import {GITHUB_HOST, GITHUB_RAW, NPM_URL, PackageName} from "#common/constants/question.const.js";
import {url_join} from "#common/utils/http/urlJoin.js";
import {fetch_} from "#common/utils/http/fetch_.js";
// npm 中的 包地址
const npmUrl =  url_join(NPM_URL,PackageName);
const githubUrl = url_join(GITHUB_RAW,GITHUB_HOST,PackageName,"master/package.json");
/**
 * 获取远端npm库中的版本号
 */
export const getNpmVersion = async ()=>{
    try{
        const res = await fetch_(npmUrl,{method:"GET"});
        console.log("获取NPM版本成功！======",res['dist-tags']?.latest)
        return res['dist-tags']?.latest;
    }
    catch(e){
        console.log("获取NPM版本失败！")
        throw new Error(e);
    }
}
/**
 * 获取github的最新提交sha
 * @returns {Promise<unknown>}
 */
export const getGithubVersion = async ()=>{
    try{
        const res = await fetch_(githubUrl,{method:"GET"});
        console.log("获取Github版本成功！======",res?.version)
        return res?.version;
    }
    catch(e){
        console.log("获取Github版本失败！",e)
        throw new Error(e);
    }
}
export const getLocalVersion = ()=>{
    console.log("开始获取本地版本号...")
    try{
        const {version} = JSON.parse(fs.readFileSync(path.resolve(rootPath,'package.json'),"utf-8"))
        console.log("本地版本号获取成功!")
        return version;
    }
    catch (e){
        console.log("本地版本号获取失败!")
        return false;
    }
}
/**
 * 检测整体的更新状况
 * @returns {Promise<{localVersion: (any|boolean), githubVersion: *, isCliUpdate: boolean, remoteVersion: unknown, isGithubUpdate: boolean}>}
 */
export const checkUpdate = async ()=>{
    const remote = await getNpmVersion();
    const github = await getGithubVersion()
    const local = getLocalVersion();
    return {
        localVersion: local,
        npmVersion: remote,
        githubVersion: github,
        isCliUpdate : remote !== local,
        isGithubUpdate: github !== local
    };
}
