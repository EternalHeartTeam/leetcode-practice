import {fetch_} from "#common/utils/http/fetch_.js";
import path from "path";

/**
 * 请求
 * @param options
 * @param host
 * @returns {Promise<any>}
 */
export const submit = async (options, host = "https://leetcode.cn/")=>{
    return await fetch_(path.join(host,'submit'),options);
}