/**
 * Created by ZHQ on 2017/10/12.
 */
/*
* @fn 确定传输进来的值是否是一个数组
* 1. Object.prototype.toString.call()
* 2. Array.isArray()
* */

(function (arr) {
    if(Object.prototype.toString.call(arr) === '[object Array]'){
        console.log('数组！');
    }else{
        console.log('不是数组！');
    }
})([]);

(function (arg) {
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
    if(Array.isArray(arg)){
        console.log('数组！');
    }else{
        console.log('不是数组！');
    }
})();