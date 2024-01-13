const { JSDOM } = require('jsdom')
const { open } = require('../scripts/open.js');
const questionFetchConfig = require("../resources/question.json")

const fs = require('fs')

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
let questionInfo = {}

fetch("https://leetcode.cn/graphql/", questionFetchConfig).then((res => res.json())).then(res => {
  questionInfo = res.data.todayRecord[0].question;
  console.log("问题对象", questionInfo)
  // code.innerHTML = JSON.stringify(questionInfo, null, 2)
  // fs.writeFileSync('./index.html', root.serialize())
  // open('./index.html')
});
