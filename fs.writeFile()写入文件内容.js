// 导入fs模块
const fs = require('fs')

// 调用fs.writeFile()
// 参数一：文件路径
// 参数二：写入内容
// 参数三：回调函数
fs.writeFile('./1.txt','胖胖爱吃兔肉',function(err, dataStr){
    // if(err) {
    //     return console.log('读取文件失败！'+ err);
    // }console.log('读取文件成功！'+ dataStr);
    console.log(err);//如果文件写入成功，则err值等于null,
})