/**
 *
 * @param imgArr
 * @param container
 * @constructor
 */
var LoopImages = function (imgArr, container) {

    // 轮播图片数组
    this.imagesArray = imgArr;

    // 轮播图片容器
    this.container = container;
}

/**
 *
 * @type {{createImage: LoopImages.createImage, changeImage: LoopImages.changeImage}}
 */
LoopImages.prototype = {

    /**
     *
     * @param arr
     */
    createImage: function (arr, container) {

        // 获取ul元素
        var list_img = container;

        // 插入图片标签
        for (var i = 0; i < arr.length; i++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'li_img');

            var img = document.createElement('img');
            img.setAttribute('src', arr[i]);

            var textNode = document.createTextNode('' + i);

            li.appendChild(img);
            li.appendChild(textNode);
            list_img.appendChild(li);
        }
    },

    //切换下一张图片
    changeImage: function (container) {
        console.log("LoopImages changeImages function");
    }
}

// 上下滑动切换类
var SlideLoopImg = function (imgArr, container) {
    LoopImages.call(this, imgArr, container);
}

SlideLoopImg.prototype = new LoopImages();

SlideLoopImg.prototype.changeImage = function () {
    console.log('SlideLoopImg changeImage function');

    var list_img = container;

    // 获取li元素
    var li_img = document.getElementsByClassName('li_img');

    // 获取控制器
    var arrows = document.getElementsByClassName('arrow');
    var prev = arrows[0];
    var next = arrows[1];

    // 动画是否已经触发
    var animated = false;

    // 自动播放定时器
    var timer;

    /**
     *图片切换函数，主要是增加或减少list_img的left值
     *
     * @param offset
     */
    function animate(offset) {
        // 动画已经被触发
        animated = true;
        var newLeft = parseInt(list_img.style.left) + offset;

        var time = 300;
        var interval = 10;

        var speed = offset / (time / interval);

        function go() {

            // speed < 0 使用next
            if ((speed < 0 && parseInt(list_img.style.left) > newLeft) || (speed > 0 && parseInt(list_img.style.left) < newLeft)) {
                list_img.style.left = parseInt(list_img.style.left) + speed + 'px';
                setTimeout(go, interval);
            } else {
                // 动画已经执行完毕
                animated = false;

                list_img.style.left = newLeft + 'px';

                // 如果是 第一张，则跳到最后一张
                if (newLeft > -800) {
                    list_img.style.left = -3200 + 'px';
                }

                // 如果是 最后一张，则跳到第一张
                if (newLeft < -3200) {
                    list_img.style.left = -800 + 'px';
                }
            }
        }
        go();
    }

    // 自动播放函数
    function autoPlay() {
        timer = setInterval(function () {
            next.onclick();
        },3000);
    }

    // 鼠标移入时停止自动播放
    function autoPlayStop() {
        clearInterval(timer);
    }

    list_img.onmouseover = autoPlayStop;
    list_img.onmouseout = autoPlay;

    autoPlay();

    next.onclick = function () {
        if(!animated){
            animate(-800);
        }
    };

    prev.onclick = function () {
        if(!animated){
            animate(+800);
        }
    };
}


//imgArr必须是一个数组
var imgAll = ['22.jpg', '22.jpg', '22.jpg', '22.jpg', '22.jpg'];

var container = document.getElementsByClassName('list_img')[0];

var hh = new SlideLoopImg(imgAll, container);

hh.createImage(hh.imagesArray, container);
hh.changeImage(hh.container);

// var FadeLoopImg = function(imgArr,container,arrow){
//     LoopImages.call(this,imgArr,container);
//     this.arrow = arrow;
// }
//
// FadeLoopImg.prototype = new LoopImages();
// FadeLoopImg.prototype.changeImage = function(){
//     console.log('FadeLoopImg changeImage function');
// }
//
// var fadeImg = new FadeLoopImg();
//
// console.log(fadeImg.container);
// fadeImg.changeImage();

