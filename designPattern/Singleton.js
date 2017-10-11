/**
 * Created by ZHQ on 2017/10/7.
 */
//TODO:========================单例模式==============================//
    /*
    * @fn  如果某个类已经创建过对象，那么则返回之前已经创建好的对象
    * @key 使用某个变量标志是否已经使用该类创建过对象
    * */
var Singleton = function (name) {
    this.name = name;
    this.instance = null;
};
Singleton.prototype.getName = function () {
    alert(this.name);
};
Singleton.getInstance = function (name) {
    // 如果方法挂载在对象上，那么方法内的this指向该对象
    if (!this.instance) {
        // 如果类的instance属性为空，则使用 Singleton类创建对象，并为它赋值
        this.instance = new Singleton(name);
    }
    return this.instance;
};
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
console.log(a);
console.log(b);
console.log(a === b); // true