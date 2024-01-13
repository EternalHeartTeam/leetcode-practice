
const { JSDOM } = require('jsdom')
const { open } = require('../scripts/open.js');
const fs = require('fs')
const { getCodeDetailJson } = require('../resources/codeDetailJson')
const { readStore } = require("../utils/store");

const todayQuestionInfo = readStore('today-question-info')
const todayQuestionEnName = todayQuestionInfo.enName

const root = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>leetcode today question</title>
  </head>
  <body>
    <div id="app">
      <code id="code"></code>
    </div>
  </body>
</html>`)

const window = root.window
const document = window.document
const code = document.querySelector('#code')

fetch("https://leetcode.cn/graphql/", getCodeDetailJson(todayQuestionEnName)).then((res => res.json())).then(res => {
  questionCodeDetail = res.data.question.envInfo;
  code.innerHTML = JSON.stringify(questionCodeDetail, null, 2)
  fs.writeFileSync('./index.html', root.serialize())
  open('./index.html')
})

