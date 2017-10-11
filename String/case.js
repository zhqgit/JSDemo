/**
 * Created by ZHQ on 2017/10/9.
 */
/*
 * @fn 判断字母大小写
 * 1. 根据 charCodeAt('char') 返回的 Unicode 来判断
 * 2. 直接让传进来的字符转化为大写，然后与原来的字符比较
 * 3. 使用正则测试字符在大写字母区间还是小写字母区间
 * */

function checkCharCase(str,num) {
    let unicodeNum = str.charCodeAt(num);
    if(unicodeNum > 96){
        console.log('小写！');
    }
    if(unicodeNum < 90){
        console.log('大写！');
    }
}

function isUpper(code) {
    return code === code.toUpperCase();
}

function IsUpper(code) {
    if(/[A-Z]/.test(code)){
        console.log('大写！');
    }
    if(/[a-z]/.test(code)){
        console.log('小写！');
    }
}





