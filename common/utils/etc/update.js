import https from "https";
import {rootPath} from "#common/utils/file/getRootPath.js";
import fs from "fs";
import path from "path";

const npmUrl =  `https://registry.npmjs.org/leetcode-practice`;
const githubUrl = `https://api.github.com/repos/wh131462/leetcode-practice/commits?per_page=1`;
/**
 * 获取远端npm库中的版本号
 */
export const getRemoteVersion = ()=>{
    return new Promise((resolve, reject) => {
        https.get(npmUrl, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const packageInfo = JSON.parse(data);
                    const latestVersion = packageInfo['dist-tags'].latest;
                    resolve(latestVersion);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (error) => {
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
        https.get(githubUrl,{
            headers: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
        },(res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    const latestCommitSha = jsonData[0].sha;
                    console.log(latestCommitSha)
                    resolve(latestCommitSha);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}
export const getLocalVersion = ()=>{
    try{
        const {version} = JSON.parse(fs.readFileSync(path.resolve(rootPath,'package.json'),"utf-8"))
        return version;
    }
    catch (e){
        return false;
    }
}

export const checkUpdate = async ()=>{
    const remote = await getRemoteVersion();
    const local = getLocalVersion();
    const github = await getGithubVersion()
    console.log(github)
    return {
        localVersion: local,
        remoteVersion: remote,
        isUpdate : remote !== local
    };
}
