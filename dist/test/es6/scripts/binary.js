"use strict";

/**
 * Created by ZHQ on 2017/7/17.
 */
function binaryAgent(str) {

    // 将二进制字符串分割
    var binaryArr = str.split(" ");

    // 将二进制转换成十进制
    var decimalArr = binaryArr.map(function (x) {
        // parseInt() 函数第二个参数表示要转换的参数的基数，如传入的要转换的参数是二进制，则第二个参数为2
        return parseInt(x, 2);
    });

    // 将十进制的码转换成字母
    var letterArr = decimalArr.map(function (x) {
        return String.fromCharCode(x);
    });

    // 将字母数组连接
    var finalStr = letterArr.join("");

    return finalStr;
    console.log(binaryArr);
    console.log(decimalArr);
    console.log(letterArr);
    console.log(finalStr);
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//# sourceMappingURL=binary.js.map