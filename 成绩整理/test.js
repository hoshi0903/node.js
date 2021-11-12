const fs = require('fs')

fs.readFile('./成绩.txt','utf8',function(err, dataStr){
    if(err){
        return console.log('读取文件失败！'+err);
    }
    // 先把成绩用空格进行分割
    // split() 方法用于把一个字符串分割成字符串数组
    // split(" ")代表从空格的地方分割
    console.log(dataStr);
    const arrOld = dataStr.split(" ");

    // 循环分割后的数组，对每一项数据，进行字符串的替换
    // replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',':'))
    })
    console.log(arrNew);

    // 新数组的每一项换行隔开，以字符串形式返回

    // join() 方法将数组作为字符串返回。
    // 元素将由指定的分隔符分隔。默认分隔符是逗号 (,)。
    // join() 方法不会改变原始数组。
    const newStr = arrNew.join('\r\n');//'\r\n'是换行回车键
    console.log(newStr);

    fs.writeFile('./成绩OK.txt',newStr,function(err, dataStr){
        if(err) {
            return console.log('写入失败' + err);
        } console.log('写入成功');
    })
})