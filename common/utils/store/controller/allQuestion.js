import { exeOnce } from '#common/utils/store/store-realm.js';

const oSign = '$object$';
/**
 * 读取的时候:从对象的字符串转化到对象的对象
 * @param obj
 */
function parseQuestion(obj) {
    if (!obj) return null;
    return Object.entries(obj).reduce((pre, [k, v]) => {
        pre[k] = typeof v == 'string' && v.startsWith(oSign) ? JSON.parse(v.replace(oSign, '')) : v;
        return pre;
    }, {});
}
/**
 * 存入的时候:从对象的对象属性转化到字符串
 */
function stringifyQuestion(obj) {
    if (!obj) return null;
    return (
        Object.entries(obj)?.reduce((pre, [key, value]) => {
            pre[key] = value != null && typeof value === 'object' ? oSign + JSON.stringify(value) : value;
            return pre;
        }, {}) ?? {}
    );
}

/**
 * 获取一个问题对象
 * @param id
 * @returns {Promise<void>}
 */
export function getOneQuestion(id) {
    return exeOnce((realm) => {
        const question = realm.objectForPrimaryKey('AllQuestion', id);
        return parseQuestion(question?.toJSON());
    });
}

/**
 * 存一个问题对象
 * @param question
 * @returns {*}
 */
export function setOneQuestion(question) {
    return exeOnce((realm) => {
        let newQuestion;
        realm.write(() => {
            newQuestion = realm.create('AllQuestion', stringifyQuestion(question), true);
        });
        return newQuestion?.toJSON();
    });
}

/**
 * 根据模式读取对象
 * @returns {unknown}
 */
export function getAllQuestion() {
    return exeOnce((realm) => {
        const all = realm.objects('AllQuestion');
        return all?.toJSON()?.map(parseQuestion);
    });
}

/**
 * 存对象
 * @param questions
 * @returns {*}
 */
export function setAllQuestion(questions) {
    return exeOnce((realm) => {
        const newQuestions = [];
        realm.write(() => {
            for (const question of questions) {
                const data = stringifyQuestion(question);
                if (!data?.questionId) continue;
                newQuestions.push(realm.create('AllQuestion', data, true));
            }
        });
        return newQuestions;
    });
}

/**
 * 删除全部
 */
export function deleteAllQuestion() {
    return exeOnce((realm) => {
        realm.write(() => {
            realm.delete(realm.objects('AllQuestion'));
        });
    });
}
