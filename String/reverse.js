/**
 * Created by ZHQ on 2017/10/11.
 */
/*
* @fn 字符串取反
* */

(function (str) {
    let arr = str.split('');
    arr = arr.reverse();
    str = arr.join('');
    console.log(str);
})("I,Love,You,Do,you,love,me");