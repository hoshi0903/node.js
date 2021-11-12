const fs = require('fs');
const path = require('path');

// 定义文件的存放路径
const fpath = 'F:/前端/Node.js基础/files/1.txt';

const fullName = path.basename(fpath);
console.log(fullName);//1.txt

 
// 只拿到文件名称，不要后缀名
const nameWithoutExt = path.basename(fpath,'.txt')
console.log(nameWithoutExt);//1

// 只要后缀名，扩展名，不要文件名称
const fext = path.extname(fpath)
console.log(fext);//.txt