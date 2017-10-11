/**
 * Created by ZHQ on 2017/10/8.
 */
(function (global) {
    // 定义一个$符号
    // 判断$符号在全局下能不能用

    console.log(typeof global.g);

    if(typeof global.g !== "undefined"){
        console.log("Here!");
        var _g = global.g;
    }else{
        global.g = "haha";
    }

    // 怎么在全局下使用g
    global.g = g;


    // 不是运行在浏览器端的话，window === undefined
})(typeof window!== "undefined" ? window : this);