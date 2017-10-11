/**
 * Created by ZHQ on 2017/10/11.
 */
/*
* @fn 字符串连接
* 1. ES6 rest参数获取传入的多个值(没有了参数个数的限定)
* 2. 将要连接的字符串放入数组，然后使用ES6的数组扩展运算符将数组转换为用逗号分隔的参数序列
* 3. 将上面两种方法联合使用
*
* 注：ES6的rest参数将函数传进来的参数多转换为1(Object)，而ES6的数组扩展运算符又将1(数组)转换为多
* */
(function (...values) {
    let strR = '';
    for(let val of values){
        strR = strR + val;
    }
    console.log(strR);
})('ha','he','na');


(function (strArr) {
    console.log(''.concat(...strArr));
})(['ha','he','na']);


(function (...values) {
    let strArr = [];
    for(let val of values){
        strArr.push(val);
    }
    console.log(''.concat(...strArr));
})('ha','he','na');