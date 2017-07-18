/**
 * Created by ZHQ on 2017/7/16.
 */
'use strict'
const concat = function () {
    
};


/**
 * @fn 合并任意个数的字符串，利用了ES6的rest参数(...变量名)，rest参数获取函数的所有参数
 *
 * @param values
 * @returns {string}
 */
function add(...values) {
    let sum = '';
    for(let val of values){
        sum += val;
    }
    return sum;
}

// 输出hello world!
console.log(add('he','l','lo',' world!'));

// 神奇！
const addStr = (...values) => values.join("");

console.log(addStr('he','l','lo',' world!!'));

