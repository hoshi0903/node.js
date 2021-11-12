const fs = require('fs')
const path = require('path')

// ../会抵消掉前面的路径

const pathStr = path.join('/f','/前端','../','/files')
console.log(pathStr);// /f/files

// 凡是需要路径拼接，都要使用path.join()
fs.readFile(path.join(__dirname,'/1.txt'),'utf8',function(err,dataStr){
    if(err){
        return console.log('读取失败'+ err);
    }
    console.log('读取成功' +  dataStr);
})