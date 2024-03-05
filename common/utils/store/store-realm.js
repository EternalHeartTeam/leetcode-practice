import Realm from "realm";
import {Question} from "#common/utils/store/schemas/question.js";
import path from "path";
import {rootPath} from "#common/utils/file/getRootPath.js";
import {Store} from "#common/utils/store/schemas/store.js";
import {readdirSync, rmdir, rmdirSync, rmSync} from "fs";

const localPath = path.resolve(rootPath, "resources/stores/store.realm")
/**
 * 开启
 * @returns {Promise<Realm>}
 */
export const open = async () => {
    let realm;
    try {
        realm = await Realm.open({
            schema: [Question, Store],
            path: localPath
        });
    }catch (e) {
        if (e?.message?.includes('Migration')) {
            await cleanStore();
        }
        realm = await Realm.open({
            schema: [Question, Store],
            path: localPath
        });
    }
    return realm;
}
/**
 * 执行一次
 * @param callback
 * @returns {Promise<void>}
 */
export const exeOnce = async (callback) => {
    const realm = await open();
    const res = await callback(realm);
    realm.close();
    return res;
}
/**
 * 清理缓存
 * @returns {Promise<unknown>}
 */
export const cleanStore = () => {
    return new Promise(resolve=>{
        const dir = path.dirname(localPath);
        const files = readdirSync(dir);
        files.forEach(file=>{
            rmSync(path.resolve(dir,file),{recursive:true,force:true});
        })
        resolve()
    })
}