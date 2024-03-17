import { getQuestionTagTypeJson } from '#resources/headers/questionTagTypeJson.js';
import { graphql } from '#common/utils/http/graphql.js';

export async function getQuestionTagType() {
    const { data } = await graphql(getQuestionTagTypeJson());
    const { questionTagTypeWithTags } = data;
    return questionTagTypeWithTags;
}
