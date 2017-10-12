/**
 * Created by ZHQ on 2017/10/12.
 */
/*
* @fn 生成数组
* 1. new Array()
* 2. Array() 和1一样
* 3. Array.from() 从一个类似数组或可迭代的对象中创建一个新的数组实例
* 4. Array.of(3)  返回 [3]
* */

(function () {
    let arr = new Array(3);
    console.log(Object.prototype.toString.call(arr));
})();

(function () {
    let arr = Array(3);
    console.log(Object.prototype.toString.call(arr));
})();

(function () {
    let arr = Array.from('foo');
    console.log(Object.prototype.toString.call(arr));
})();

(function () {
    let arr = Array.of(3);
    console.log(Object.prototype.toString.call(arr));
})();
