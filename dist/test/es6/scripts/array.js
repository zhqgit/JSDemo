"use strict";

/**
 * Created by ZHQ on 2017/7/17.
 */
// 计算两个值之间所有整数的和(参数是一个含两个值数组)
function sumAll(arr) {
    // 得到最大值和最小值
    // Math.max() 函数返回一组数中的最大值
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);

    // 如果是小数，要先转换(大于0和小于0要区分开)

    max > 0 ? max = Math.floor(max) : max = Math.ceil(max);
    min > 0 ? min = Math.floor(min) : min = Math.ceil(min);

    var result = 0;
    for (var i = min; i <= max; i++) {
        result += i;
    }

    return result;
}
sumAll([10.2, -1.2]);

// 求两个数组的差异，并返回差异值组成的数组
// 比如diff([1, 2, 3, 5], [1, 2, 3, 4, 5])就应该会返回一个[4]。
function diffArr(arr1, arr2) {
    return arr1.concat(arr2).filter(function (item) {
        // filter()函数只要callback函数return的结果为true时，就返回该测试项
        return !arr1.includes(item) || !arr2.includes(item);
    });
}
console.log(diffArr([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// 若对象数组中的某个对象含有某个属性-值对，则输出这个对象
// where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// 返回 [ { a: 1, b: 2 }, { a: 1, b: 2, c: 2 } ]

function findObject(objArr, source) {
    // 获得需要查找的属性
    var sourceKeys = Object.keys(source);

    return objArr.filter(function (obj) {
        for (var i = 0; i < sourceKeys.length; i++) {
            //如果obj中不存在那些属性，或属性不匹配，则返回false，即为不符合条件。
            if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

console.log(findObject([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
//# sourceMappingURL=array.js.map