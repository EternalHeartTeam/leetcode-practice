export function getQuestionTypesJson() {
    return {
        headers: {"content-type": "application/json"},
        body: `{
            "query": "\\n    query questionTagTypeWithTags {\\n  questionTagTypeWithTags {\\n    name\\n    transName\\n    tagRelation {\\n      questionNum\\n      tag {\\n        name\\n        id\\n        nameTranslated\\n        slug\\n      }\\n    }\\n  }\\n}\\n    ",
            "variables": {},
            "operationName": "questionTagTypeWithTags"
        }`,
        method: 'POST',
    };
}

