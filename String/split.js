/**
 * Created by ZHQ on 2017/10/11.
 */
/*
* @fn 字符串分割
* 1. 按照某个字符分割字符串
* 2. 每 n 个字符分割一次
* 3. 将字符分为均等 n 段
* */

(function (str,char) {
    let arr = str.split(char);
    console.log(arr);
})("I,Love,You,Do,you,love,me",",");

(function (str,n) {
    let arr = [];
    for(let i=0;i<str.length;i+=n){
        let strFrag = str.slice(i,i+n);
        arr.push(strFrag);
    }
    console.log(arr);
})("I,Love,You,Do,you,love,me",3);

(function (str,n) {
    let arr = [];
    // 向上取整
    let sliceNum = Math.ceil(str.length/n);
    for(let i=0;i<str.length;i+=sliceNum){
        let strFrag = str.slice(i,i+sliceNum);
        arr.push(strFrag);
    }
    console.log(arr);
})("I,Love,You,Do,you,love,me",5);
