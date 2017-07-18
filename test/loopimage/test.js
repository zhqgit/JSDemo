window.onload = function () {
    var container = document.getElementById('container');


    //获取ul元素
    var list_img = document.getElementsByClassName('list_img')[0];

    //获取li元素
    var li_img = document.getElementsByClassName('li_img');

    //获取div_btn
    var div_btn = document.getElementsByClassName('div_btn');
    //btn亮的位置
    var index = 1;

    //获取控制器
    var arrows = document.getElementsByClassName('arrow');
    var prev = arrows[0];
    var next = arrows[1];

    function showButton(){
        div_btn[index -1].className = 'on';
    }

    function animate(offset) {
        var newLeft = parseInt(list_img.style.left) + offset;
        list_img.style.left = newLeft + 'px';

        //如果是 第一张，则跳到最后一张
        if (newLeft > -800) {
            list_img.style.left = -3200 + 'px';
        }

        //如果是 最后一张，则跳到第一张
        if(newLeft < -3200) {
            list_img.style.left = -800 + 'px';
        }
    }


    next.onclick = function () {
        console.log(list_img.style.left);
        index = index + 1;
        animate(-800);
        showButton();
        console.log(list_img.style.left);
    };

    prev.onclick = function () {
        console.log(list_img.style.left);
        index = index - 1;
        animate(+800);
        showButton();        
        console.log(list_img.style.left);
    };
}