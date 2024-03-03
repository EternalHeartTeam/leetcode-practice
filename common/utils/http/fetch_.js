/**
 * 基础请求
 * @param url
 * @param options
 * @returns {Promise<any>}
 * @private
 */
export const fetch_ = async (url,options)=>{
    return await fetch(url,options).then(res=>res.json())
}