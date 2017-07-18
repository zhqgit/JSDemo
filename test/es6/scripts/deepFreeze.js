/**
 * Created by ZHQ on 2017/7/18.
 */
function deepFreeze(obj) {

    // 获得属性名
    // Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组
    let propNames = Object.getOwnPropertyNames(obj);

    // forEach()函数的callback函数接受三个参数
    // 当前值，当前值索引，当前数组
    propNames.forEach(function (name) {
        var prop = obj[name];

        // 如果属性值是对象则继续冻结
        if (!prop && prop === 'object') {
            deepFreeze(prop);
        }
    });
    return Object.freeze(obj);
}