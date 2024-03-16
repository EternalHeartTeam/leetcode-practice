import { fetch_ } from '#common/utils/http/fetch_.js';
import { url_join } from '#common/utils/http/urlJoin.js';

/**
 * 请求 graphql
 * @param options
 * @param host
 * @returns {Promise<any>}
 */
export async function graphql(options, host = 'https://leetcode.cn/') {
    return await fetch_(url_join(host, 'graphql'), options);
}
