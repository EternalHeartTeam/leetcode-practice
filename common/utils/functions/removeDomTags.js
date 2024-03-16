/**
 * 去除dom标签
 * @param input
 * @returns {string|string}
 */
export function removeDomTags(input) {
    return input
        ?.replace(/<[^>]*>/g, '')
        .replaceAll(' ', ' ')
        .replaceAll('&nbsp;', ' ')
        .replaceAll('&lt;', '<')
        .replaceAll('&gt;', '>')
        .replaceAll('`', '');
}
