// 导入fs模块
const fs = require('fs')
// 调用fs.readFile()读取文件
// 参数1：path：路径 必填
// 参数2：options: 编码 可选 默认utf8
// 参数3：callback: 必填，通过回调函数读取拿到的结果 err dataStr
// err 失败返回的结果，如果成功则返回null，失败则是undefined
// dataStr 成功返回的结果，返回数据
fs.readFile('./1.txt','utf8',function(err ,dataStr){
    if(err){
        return console.log('读取文件失败！'+err);
    } console.log('读取文件成功！'+dataStr);
})