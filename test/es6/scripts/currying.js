/**
 * Created by ZHQ on 2017/8/11.
 */
/*
 * @fn 函数的柯里化
 *
 * @Currying(柯里化) 是把一个接受 N 个参数的函数转换成接受一个单一参数（最初函数的第一个参数）的函数，
 *  并且返回接受余下的参数而且返回结果的新函数的技术。也就是说每个函数都接受1个参数。
 * */


/**
 *
 * @intro 未柯里化的函数
 * @fn 加法运算
 *
 * @param a
 * @param b
 * @param c
 * @returns {*}
 */
function add(a, b, c) {
    return a + b + c;
}

/**
 * @intro 柯里化的函数
 * @fn 加法运算
 *
 * @param a
 * @returns {Function}
 */
function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

curriedAdd(1)(2)(3);

/**
 * @apply 函数的作用，常见使用fn.apply(),apply(thisArg,argsArray)
 * @apply 第一个参数表示fn函数运行时的this值,第二个参数传入的是数组
 * @apply 数组元素将作为单独的参数传给 fn 函数
 *
 *
 *
 * @param fn
 * @returns {Function}
 */
function currying(fn) {
    var slice = Array.prototype.slice,
        __args = slice.call(arguments, 1);
        console.log(__args);   // [ [Function: square] ]

        // 这个函数返回给 mapSQ
    return function () {

        // arguments 是mapSQ传入的参数
        var __inargs = slice.call(arguments);
        console.log(__inargs);
        
        // 运行时this制定为null时表示指向全局window
        console.log(__args.concat(__inargs));  // [ [Function: square], [ 1, 2, 3, 4, 5 ] ]

        // fn 是map函数，map函数接受两个参数
        // __args.concat(__inargs) 被拆成 [Function: square]，[ 1, 2, 3, 4, 5 ] 传给函数fn
        return fn.apply(null, __args.concat(__inargs));
    };
}


function square(i) {
    return i * i;
}

function dubble(i) {
    return i *= 2;
}

function map(handeler, list) {
    return list.map(handeler);
}

var mapSQ = currying(map, square);
mapSQ([1, 2, 3, 4, 5]);

// var mapDB = currying(map, dubble);
// mapDB([1, 2, 3, 4, 5]);


