/**
 * 基础请求-直接返回JSON格式的值
 * @param url
 * @param options
 * @returns {Promise<any>}
 * @private
 */
export const fetch_ = async (url,options)=>{
    return await fetch(url,options).then(res=>res.json())
}