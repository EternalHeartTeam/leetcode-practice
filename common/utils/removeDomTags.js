/**
 * 去除dom标签
 * @param input
 * @returns {string|string}
 */
function removeDomTags(input) {
    return input.replace(/<[^>]*>/g, '').replaceAll("&nbsp;", " ").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
}

module.exports = { removeDomTags }
