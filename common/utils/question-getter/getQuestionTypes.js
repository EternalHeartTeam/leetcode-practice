import {getQuestionTypesJson} from "#resources/headers/questionTypeJson.js";
import {graphql} from "#common/utils/http/graphql.js";

/**
 * 获取问题的类型
 * 数据结构:
 * tags = Array<Category>;
 * interface Category{
 *      name:string;// 目录名 英文
 *      transName:string;// 目录名 中文
 *      tagRelation:Array<TagRelation>; //关系 相当于子列表
 * }
 * interface TagRelation{
 *      questionNum:number;// 关联问题数量
 *      tag:Tag; // 具体标签信息
 * }
 * interface Tag{
 *      name:string; // 标签名字 英文
 *      id:string; // 标签的id
 *      nameTranslated:string; // 标签名字 中文
 *      slug:string; // 标签的标识符 核心字段 筛选可用
 * }
 * @returns {Promise<*>}
 */
export async function getQuestionTypes() {
    const res = await graphql(getQuestionTypesJson());
    const tags = res.data?.questionTagTypeWithTags;
    // console.log(JSON.stringify(tags))
    return tags;
}
