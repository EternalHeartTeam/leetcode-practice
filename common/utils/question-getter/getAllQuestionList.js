import ora from 'ora'
import { graphql } from '#common/utils/http/graphql.js'
import { getAllQuestionRequestUrlJson } from '#resources/headers/allQuestionRequestUrlJson.js'

export async function getAllQuestionUrl() {
  const { data } = await graphql(getAllQuestionRequestUrlJson())
  const { allQuestionUrls } = data
  const { questionUrl } = allQuestionUrls
  return questionUrl
}

export async function getAllQuestionList() {
  const url = await getAllQuestionUrl()
  const loader = ora('loading...').start()
  const allQuestionData = await fetch(url, {
    headers: { 'content-type': 'application/json' },
    body: null,
    method: 'GET'
  })
  loader.stop()
  return allQuestionData.json()
}
