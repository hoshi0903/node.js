const fs = require('fs')

// 出现路径拼接错误的问题，是因为出现了./或者../开头的相对路径
// './1.text':相对路径
fs.readFile('./1.txt','utf8',function(err,dataStr){
        if(err){
            return console.log('读取失败！' + err);
        } console.log('读取成功' + dataStr);
    
        // __dirname 代表当前（路径拼接.js）文件所处的目录
        console.log(__dirname);
    })



// 如果要解决这个问题，可以直接提供一个完整的存放路径；
// 绝对路径：'F:\\前端\\Node.js基础\\files\\1.txt'
    fs.readFile('F:\\前端\\Node.js基础\\files\\1.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('读取失败！' + err);
    } console.log('读取成功' + dataStr);


})


// 路径拼接
// 绝对路径的移植性非常差，容易写错不易于维护；
// __dirname 代表当前（路径拼接.js）文件所处的目录
    fs.readFile(__dirname + '/1.txt','utf8',function(err,dataStr){
        if(err){
            return console.log('读取失败！' + err);
        } 
        console.log('读取成功' + dataStr);
        console.log(__dirname);
    })
