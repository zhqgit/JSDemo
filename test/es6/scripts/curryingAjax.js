/**
 * Created by ZHQ on 2017/8/11.
 */
function Ajax() {
    this.xhr = new XMLHttpRequest();
}

Ajax.prototype.open = function(type, url, data, callback) {
    this.onload = function() {
        callback(this.xhr.responseText, this.xhr.status, this.xhr);
    }

    this.xhr.open(type, url, data.async);
    this.xhr.send(data.paras);
}

// split把字符串拆分成字符串数组
'get post'.split(' ').forEach(function(mt) {
    Ajax.prototype[mt] = currying(Ajax.prototype.open, mt);
});

var xhr = new Ajax();
xhr.get('/articles/list.php', {},
    function(datas) {
        // done(datas)
    });

var xhr1 = new Ajax();
xhr1.post('/articles/add.php', {},
    function(datas) {
        // done(datas)
    });