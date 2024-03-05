/**
 * 拼接域名和地址
 * @param host
 * @param rest
 * @returns {string}
 */
export const url_join = (host,...rest)=>{
    const host_base = host.replace(/\/$/,"");
    const path = rest.join('/').replace(/(\/){1,3}/gmi,'/').replace(/^\//,'');
    return [host_base,path].join("/");
}