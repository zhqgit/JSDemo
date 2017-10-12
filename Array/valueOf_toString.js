/**
 * Created by ZHQ on 2017/10/11.
 */
/*
* @fn 研究一下valueOf和toString两个函数的区别
* */


// 当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法
Array.prototype.toString = function () {
    console.log('调用我？');
    return 'toString函数被调用了！';
};

(function () {
    let colors = ["red", "blue", "green"];
    console.log(Object.prototype.toString.call(colors.valueOf()));
    console.log(Object.prototype.toString.call(colors.toString()));
})();

(function () {
    let arr = [1,2,3];
    console.log(arr + '');
})();
