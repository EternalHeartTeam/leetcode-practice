import {exeOnce} from "#common/utils/store/store-realm.js";
import {UpdateMode} from "realm";

/**
 * 设置一项记录
 * @param key
 * @param value
 * @returns {Promise<void>}
 */
export const setStore = (key,value) => exeOnce((realm) => {
    let newStore;
    realm.write(() => {
        newStore = realm.create("Store", {key,value},UpdateMode.Modified);
    });
    return newStore.toJSON();
});
/**
 * 获取记录值
 * @param key
 * @returns {Promise<void>}
 */
export const getStore = (key) => exeOnce((realm) => {
    const all = realm.objects("Store");
    let storeObj = all.filtered("key=$0", key)?.[0]?.toJSON();
    return storeObj?.value;
});
/**
 * 删除某一项记录
 * @param key
 * @returns {Promise<void>}
 */
export const deleteStore = (key) => exeOnce((realm) => {
    realm.write(() => {
        realm.delete(realm.objects("Store").filtered("key=$0", key));
    });
});
/**
 * 清理全部缓存
 * @param mode
 * @returns {Promise<void>}
 */
export const clearStore = (mode) => exeOnce((realm) => {
    realm.write(() => {
        realm.delete(realm.objects("Store"));
    });
});