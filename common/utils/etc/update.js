import https from "https";
import {rootPath} from "#common/utils/file/getRootPath.js";
import fs from "fs";
import path from "path";

/**
 * 更新脚本 - 更新自己
 */
export const getRemoteVersion = ()=>{
    return new Promise((resolve, reject) => {
        const url = `https://registry.npmjs.org/leetcode-practice`;
        https.get(url, (res) => {
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
    return remote === local;
}
