import Realm from 'realm'

export class AllQuestion extends Realm.Object {
  static schema = {
    name: 'AllQuestion',
    properties: {
      questionId: 'string',
      questionFrontendId: 'string?',
      questionType: 'string?',
      categoryTitle: 'string?',
      title: 'string?',
      titleSlug: 'string?',
      difficulty: 'string?',
      isPaidOnly: 'bool?',
      codeSnippets: 'string?',
      topicTags: 'string?',
      relatedTags: 'string?',
      translatedTitle: 'string?',
      stats: 'string?',
      extra: 'string?',
      isNewQuestion: 'bool?',
      frequency: 'string?'
    },
    primaryKey: 'questionId'
  }
}
