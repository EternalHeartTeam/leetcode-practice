import { describe, expect, it } from 'vitest'
import { getQuestionListHot100 } from '#common/utils/question-getter/getQuestionListHot100.js'

describe('hot 100获取数据测试', () => {
  it('是否正确获取了hot 100合集', async () => {
    const res = await getQuestionListHot100()

    expect(Object.keys(res)).toStrictEqual(['planSubGroups'])
  })
})
