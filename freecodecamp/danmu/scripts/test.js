/**
 * Created by ZHQ on 2017/7/17.
 */

window.onload = function () {

    // 斐波那契数列
    var fioacciSequeceNum = function (count) {
        var sum = 0;
        count === 0 ? (sum += 0) : (count === 1 ? sum += 1 : sum += fioacciSequeceNum(count - 1) + fioacciSequeceNum(count - 2));
        return sum;
    }

    var ha = document.getElementById('ha');
    var timer;
    var time = 0;

    timer = setInterval(function () {
        var newLeft = parseInt(ha.style.left) - fioacciSequeceNum(time);
        ha.style.left = newLeft + 'px';
        time++;
    }, 100);

    setTimeout(function () {
        clearInterval(timer);
    },3000);
};
