import Realm from 'realm'

export class TopCompanyTagsItem extends Realm.Object {
  static schema = {
    name: 'TopCompanyTagsItem',
    properties: {
      id: 'string',
      name: 'string',
      slug: 'string',
      imgUrl: 'string?',
      nameTranslated: 'string?',
    },
  }
}

export class ExtraObject extends Realm.Object {
  static schema = {
    name: 'ExtraObject',
    properties: {
      companyTagNum: 'int',
      topCompanyTags: 'TopCompanyTagsItem[]',
      twoYearsCompanyTagNum: 'int',
    },
  }
}

export class CodeSnippetsItem extends Realm.Object {
  static schema = {
    name: 'CodeSnippetsItem',
    properties: {
      langSlug: 'string',
      lang: 'string',
    },
  }
}

export class TagTypeObject extends Realm.Object {
  static schema = {
    name: 'TagTypeObject',
    properties: {
      name: 'string',
      slug: 'string',
    },
  }
}

export class TopicTagsItem extends Realm.Object {
  static schema = {
    name: 'TopicTagsItem',
    properties: {
      id: 'string',
      name: 'string',
      slug: 'string',
      tagType: 'TagTypeObject',
      createdAt: 'string',
      isEnabled: 'bool',
      keywords: 'string',
      imgUrl: 'string?',
      translatedName: 'string',
    },
  }
}

export class AllQuestion extends Realm.Object {
  static schema = {
    name: 'AllQuestion',
    properties: {
      questionId: 'string',
      questionFrontendId: 'string',
      questionType: 'string',
      categoryTitle: 'string',
      title: 'string',
      titleSlug: 'string',
      difficulty: 'string',
      isPaidOnly: 'string',
      codeSnippets: 'CodeSnippetsItem[]',
      topicTags: 'string',
      relatedTags: 'TopicTagsItem[]',
      translatedTitle: 'string',
      stats: 'string',
      extra: 'ExtraObject',
      isNewQuestion: 'bool',
      frequency: 'string',
    },
    primaryKey: 'questionId',
  }
}
