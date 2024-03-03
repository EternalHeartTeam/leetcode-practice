import path from "path";
import {fetch_} from "#common/utils/http/fetch_.js";

/**
 * 请求
 * @param options
 * @param host
 * @returns {Promise<any>}
 */
export const graphql = async (options, host = "https://leetcode.cn/")=>{
    return await fetch_(path.join(host,'graphql'),options);
}