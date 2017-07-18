/**
 * Created by ZHQ on 2017/7/16.
 */
// function say667() {
//     // Local variable that ends up within closure
//     var num = 666;
//     var sayAlert = function () {
//         alert(num);
//     }
//     num++;
//     return sayAlert;
// }
//
// say667();


// 挑战二，输出指定位置的斐波那契数列
// 对于斐波那契数列
// f(n) = f(n-1) + f(n-2)
// f(0) = 0  f(1) = 1  f(2) = 1
// f(12) = f(11) + f(10) = 55 + 89 = 144
// 输出指定位置的斐波那契数列的数
const fioacciSequeceNum = function (count) {
    let sum = 0;
    count === 0 ? (sum += 0) : (count === 1 ? sum += 1 : sum += fioacciSequeceNum(count - 1) + fioacciSequeceNum(count - 2));
    return sum;
}
console.log(fioacciSequeceNum(12));  // 0、1、1、2、3、5、8、13、21、34、55、89

const fioacciSequece = function (count) {
    let fioacciArr = [];

    if (count === 0) {
        fioacciArr = [0];
    }

    if (count === 1) {
        fioacciArr = [0, 1];
    }

    if (count >= 2) {
        fioacciArr = [0, 1];
        for (var i = 2; i <= count; i++) {
            fioacciArr[i] = fioacciArr[i - 1] + fioacciArr[i - 2];
        }
    }
    console.log(fioacciArr);
}
fioacciSequece(12); // 0、1、1、2、3、5、8、13、21、34、55、89


// 阶乘函数
// 没有使用尾递归优化的
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

// 使用尾调用优化
function factorialBetter(n, total) {
    if (n === 1) return total;
    return factorialBetter(n - 1, n * total)
}

// 挑战三，三维数组或 n 维数组去重，使用 arguments 重写
var arr = [2, 3, 4, [2, 3, [2, 3, 4, 2], 5], 3, 5, [2, 3, [2, 3, 4, 2], 2], 4, 3, 6, 2];
var unique = function (arr) {
    // 待实现方法体
}
console.log(unique(arr)); // [2,3,4,5,6]

















