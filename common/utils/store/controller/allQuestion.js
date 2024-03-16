import { exeOnce } from '#common/utils/store/store-realm.js';

const oSign = '$object$';
/**
 * 转化对象
 * @param obj
 */
function parseQuestion(obj) {
    if (!obj) return null;
    Object.entries(obj).reduce((pre, [k, v]) => {
        pre[k] = typeof v == 'string' && v.startsWith(oSign) ? JSON.parse(v.replace(oSign, '')) : v;
        return pre;
    }, {});
}
/**
 * 转化字符串
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
        const all = realm.objects('AllQuestion');
        const question = all.filtered('questionId=$0', id)?.[0];
        return question?.toJSON();
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
            realm.delete(realm.objects('AllQuestion').filtered('questionId=$0', question.questionId));
            newQuestion = realm.create('AllQuestion', question);
        });
        return newQuestion.toJSON();
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
                newQuestions.push(realm.create('AllQuestion', data));
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
