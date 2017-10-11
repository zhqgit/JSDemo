/**
 * Created by ZHQ on 2017/9/28.
 */
/**
 * @fn 实现vue的响应式原理，热加载，实时更新
 * @param obj
 * @constructor
 */

function Observe(obj) {
    for (let key in obj) {
        let old = obj[key];
        Object.defineProperty(obj, key, {
            get: () => {
                console.log('GET:' + key);
                return old;
            },
            set: (newVal) => {
                console.log('SET:' + key + 'is' + old);

                setTimeout(()=>{
                    old = newVal;
                    console.log('视图更新完成！');
                    console.log(obj.b);
                },2000);
            }
        });
    }
}

let obj = {
    a: 10,
    b: 20
};

Observe(obj);
console.log(obj.a);
obj.b = 21;