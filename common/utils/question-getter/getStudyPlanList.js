import { graphql } from '#common/utils/http/graphql.js';
import { getStudyPlanListJson } from '#resources/headers/studyPlanListJson.js';

export async function getStudyPlanList(type) {
    const res = await graphql(getStudyPlanListJson(type));
    const {
        data: {
            studyPlansV2ByCatalog: { studyPlans }
        }
    } = res;
    return studyPlans;
}
