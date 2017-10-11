/**
 * Created by ZHQ on 2017/10/11.
 */
/*
* @fn 返回字符
* 1. 返回指定位置的字符
* 2. 返回指定位置的字符的 UTF-16 代码单元值的数字
* */

(function (str,n) {
    console.log(str.charAt(n));
})("I,Love,You,Do,you,love,me",3);

(function (str,n) {
    console.log(str.charCodeAt(n));
})("ABC",1);