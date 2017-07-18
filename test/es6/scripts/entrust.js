/**
 * Created by ZHQ on 2017/7/18.
 */
window.onload = function () {
    var oBox = document.getElementById("box");

    // 事件委托原理
    // 父元素绑定事件，获取子元素目标，触发相应操作

    oBox.onclick = function (ev) {

        // 兼容性
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;

        if (target.nodeName.toLocaleLowerCase() == 'input') {
            switch (target.id) {
                case 'add' :
                    alert('添加');
                    break;
                case 'remove' :
                    alert('删除');
                    break;
                case 'move' :
                    alert('移动');
                    break;
                case 'select' :
                    alert('选择');
                    break;
            }
        }
    }
}