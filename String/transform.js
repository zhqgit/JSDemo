/**
 * Created by ZHQ on 2017/10/11.
 */
/*
* @fn 字符串转换的方式
* 1. toString()
* 2. String(var)
* 3. '' + var
* */


(function (num) {
    console.log(typeof num.toString());
})(19);

(function (num) {
    console.log(typeof String(num));
})(19);

(function (num) {
    console.log(typeof ('' + num));
})(19);

