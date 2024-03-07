import { describe,expect,it} from 'vitest';
import {getHot100QuestionList} from '../common/utils/question-handler/getHot100QuestionList';

describe('hot 100获取数据测试', ()=> {
  it('是否正确获取了hot 100合集', async()=>{
    const res = await getHot100QuestionList();

    expect(Object.keys(res)).toStrictEqual(["planSubGroups",])


  })
})