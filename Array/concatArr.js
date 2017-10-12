/**
 * Created by ZHQ on 2017/10/12.
 */
/*
* @fn 合并数组
* 1. rest函数参数和数组扩展运算符，concat函数
* */

(function (...values) {
    let arrR = [];
    console.log(values);
    console.log(arrR.concat(...values));
})([1],[2],[3,4]);