# Utils

## Introduction

工具函数模块,方便脚本编写以及题目编写.

## Api Documents

| API             | Params                | 说明                                  |
|-----------------|-----------------------|-------------------------------------|
| temExe          | tempCommand[,args]    | 传入模板参数                              |
| withTimeLog     | callback              | 传入回调函数,会输出计时信息和内存信息和函数返回结果          |
| getFileSize     | size[,precision=2]    | 获取尺寸对应的文本比如1.50MB                   |
| getFileSizeUnit | size                  | 获取尺寸对应的单位                           |
| createQuestion  | newPath               | 以传入名称创建src/[newPath]/index.js 并填充模板 |
| fulfillQuestion | questionPath,question | 在对应题目空模板中填充具体问题信息                   |
| removeDomTags   | input                 | 从传入的html字符串中剥离html标签                |
| readStore       | key                   | 从缓存中读取对应的键值                         |
| writeStore      | key,value             | 从缓存中存入值（明文存储，文件为store.json）         |
| getJsCode       | enName                | 获取JS代码                              |
| getTestCase     | question              | 根据获取到的question信息组装测试用例              |
| getQuestionUrl  | enName                | 简单组装问题的URL                          |
| getRandomId     |                       | 获取随机当前src目录下不存在的问题id                |
