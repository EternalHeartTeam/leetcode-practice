import https from "https";
import {rootPath} from "#common/utils/file/getRootPath.js";
import fs from "fs";
import path from "path";
const npmUrl =  `https://registry.npmjs.org/leetcode-practice`;
const githubUrl = `https://raw.githubusercontent.com/wh131462/leetcode-practice/master/package.json`;
/**
 * 获取远端npm库中的版本号
 */
export const getNpmVersion = ()=>{
    return new Promise((resolve, reject) => {
        console.log("开始获取npm仓库中的版本号...")
        https.get(npmUrl, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const packageInfo = JSON.parse(data);
                    const latestVersion = packageInfo['dist-tags'].latest;
                    console.log("npm仓库中的版本号获取成功!")
                    resolve(latestVersion);
                } catch (error) {
                    console.log("npm仓库中的版本号获取失败!")
                    reject(error);
                }
            });
        }).on('error', (error) => {
            console.log("npm仓库中的版本号获取失败!")
            reject(error);
        });
    });
}
/**
 * 获取github的最新提交sha
 * @returns {Promise<unknown>}
 */
export const getGithubVersion = ()=>{
    return new Promise((resolve, reject) => {
        console.log("开始获取github仓库的版本号...")
        https.get(githubUrl,(res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    console.log("github仓库的版本号获取成功!")
                    resolve(jsonData.version);
                } catch (error) {
                    console.log("github仓库的版本号获取失败!")
                    reject(error);
                }
            });
        }).on('error', (error) => {
            console.log("github仓库的版本号获取失败!")
            reject(error);
        });
    });
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
