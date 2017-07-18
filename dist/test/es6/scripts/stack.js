'use strict';

/**
 * Created by ZHQ on 2017/7/17.
 */

// 实现一个栈，即后进先出
// 栈应该是一个类还是一个函数？

// 实现一个链栈类(初始化一个栈还需要为栈指定长度)
function LinkedStack(len) {

    // 节点结构
    var Node = function Node(el) {
        this.el = el;
        this.next = null;
    };

    // 初始栈长度
    var stackSize = len;

    // 现在栈的长度
    var length = 0;

    // 栈顶指针，判断空栈的条件为top指针等于-1
    var top = -1;

    this.push = function (el) {

        // 压栈之前要先判断是否已经栈满了
        if (length == stackSize) {
            console.log('栈满');
            return false;
        } else {
            var node = new Node(el);
            var current;

            // 如果栈为空
            if (top == -1) {
                top = node;
                length++;
                return true;
            } else {
                node.next = top;
                top = node;
                length++;
                return true;
            }
        }
    };

    this.pop = function () {
        var current = top;
        if (top == -1) {
            console.log('栈空，无法执行退栈！');
            return false;
        } else {
            top = current.next;
            current.next = null;
            length--;

            // 退栈要返回弹出的元素
            return current;
        }
    };

    // 获取栈顶节点
    this.top = function () {
        return top.el;
    };

    // 获取当前栈长度
    this.size = function () {
        return length;
    };

    // 打印当前栈
    this.toString = function () {
        var str = '';
        var current = top;
        while (current) {
            str += current.el;
            current = current.next;
        }

        return str;
    };

    this.clear = function () {
        top = -1;
        length = 0;

        return true;
    };
}

var stack = new LinkedStack(3);
stack.push(1);
console.log(stack.top());

// 顺序栈的实现和JS普通数组类似
//顺序栈的JS实现 这里直接使用了JS内置的Array对象
function ArrayStack() {
    var arr = [];
    //压栈操作
    this.push = function (element) {
        arr.push(element);
    };
    //退栈操作
    this.pop = function () {
        return arr.pop();
    };
    //获取栈顶元素
    this.top = function () {
        return arr[arr.length - 1];
    };
    //获取栈长
    this.size = function () {
        return arr.length;
    };
    //清空栈
    this.clear = function () {
        arr = [];
        return true;
    };

    this.toString = function () {
        return arr.toString();
    };
}
//# sourceMappingURL=stack.js.map