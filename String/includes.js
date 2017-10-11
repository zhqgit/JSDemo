/**
 * Created by ZHQ on 2017/10/11.
 */
/*
* @fn 字符包含
* 1. 一个字符串是否包含在另一个字符串中
* 2. 从指定位置开始搜索，一个字符串是否包含在另一个字符串中
* */

(function (str1,str2) {
     console.log(str1.includes(str2));
})('To be, or not to be, that is the question.','To be');

(function (str1,str2,position) {
    console.log(str1.includes(str2,position));
})('To be, or not to be, that is the question.','To be',1);