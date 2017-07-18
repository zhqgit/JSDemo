/**
 * Created by ZHQ on 2017/7/16.
 */
'use strict';

var concat = function concat() {};

/**
 * @fn 合并任意个数的字符串，利用了ES6的rest参数(...变量名)，rest参数获取函数的所有参数
 *
 * @param values
 * @returns {string}
 */
function add() {
    var sum = '';

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            sum += val;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return sum;
}

// 输出hello world!
console.log(add('he', 'l', 'lo', ' world!'));

// 神奇！
var addStr = function addStr() {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
    }

    return values.join("");
};

console.log(addStr('he', 'l', 'lo', ' world!!'));
//# sourceMappingURL=index.js.map