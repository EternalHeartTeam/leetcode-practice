# Utils

工具函数模块,方便脚本编写以及题目编写.

# Api Documents

| API             | Params             | 说明                         |
|-----------------|--------------------|----------------------------|
| temExe          | tempCommand[,args] | 传入模板参数                     |
| withTimeLog     | callback           | 传入回调函数,会输出计时信息和内存信息和函数返回结果 |
| getFileSize     | size[,precision=2] | 获取尺寸对应的文本比如1.50MB          |
| getFileSizeUnit | size               | 获取尺寸对应的单位                  |