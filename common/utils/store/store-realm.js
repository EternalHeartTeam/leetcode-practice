import Realm from "realm";
import {Question} from "#common/utils/store/schemas/question.js";
import path from "path";
const localPath = path.normalize("resources/stores/store.realm")
/**
 * 开启
 * @returns {Promise<Realm>}
 */
const open = async ()=>{
    const realm =await Realm.open({
        schema: [Question],
        path:localPath
    });
    return realm;
}
/**
 * 执行一次
 * @param callback
 * @returns {Promise<void>}
 */
const exeOnce = async (callback)=>{
    const realm = await open();
    const res = await callback(realm);
    realm.close();
    return res;
}

/**
 * 读取对象
 * @param mode
 * @returns {unknown}
 */
export const getQuestionByMode = (mode)=>exeOnce((realm)=>{
    const all = realm.objects("Question");
    const question = all.filtered("mode=$0",mode)?.[0];
    return question.toJSON();
})
/**
 * 存对象
 * @param mode
 * @param question
 * @returns {*}
 */
export const setQuestion = (mode,question)=>exeOnce((realm)=>{
    let newQuestion;
    realm.write(() => {
        realm.delete(realm.objects("Question").filtered("mode=$0",mode));
        newQuestion = realm.create("Question", Object.assign(question,{mode}));
    });
    return newQuestion.toJSON();
});
/**
 * 删除某一个模式
 * @param mode
 */
export const deleteQuestionByMode = (mode)=>exeOnce((realm)=>{
    realm.write(() => {
        const modes = realm.objects("Question").filtered("mode=$0",mode)
        realm.delete(modes);
    });
});
/**
 * 删除全部
 */
export const deleteAllQuestion = ()=>exeOnce((realm)=>{
    realm.write(() => {
        realm.delete(realm.objects("Question"));
    });
});
