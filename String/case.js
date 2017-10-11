/**
 * Created by ZHQ on 2017/10/9.
 */
/*
 * @fn 判断字母大小写
 * 1. 根据 charCodeAt('char') 返回的 Unicode 来判断
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





