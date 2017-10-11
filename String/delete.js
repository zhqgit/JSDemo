/**
 * Created by ZHQ on 2017/10/11.
 */
/*
* @fn 删除某些字符串
* 1. 删除指定的字符，从指定位置开始，默认为0
* */

(function (str,delStr) {
    // 删除之前先判断删除的字符是否存在该字符串
    if(str.indexOf(delStr) !== -1){
        let reg = new RegExp(delStr,'g');
        let strR = str.replace(reg,'');
        console.log(strR);
    }else{
        console.log('要删除的字符串不存在于被删除的字符串！');
    }
})("I,Love,You,Do,you,love,me",'vv');

(function (str,delStr,position = 0) {
    if(str.indexOf(delStr) !== -1){
        let reg = new RegExp(delStr,'g');
        let needDel = str.substr(position);
        let noDel = str.substr(0,position);
        let strR = noDel.concat(needDel.replace(reg,''));
        console.log(strR);
    }else{
        console.log('要删除的字符串不存在于被删除的字符串！');
    }
})("I,Love,You,Do,you,love,me",'ou',1);




