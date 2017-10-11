/**
 * Created by ZHQ on 2017/10/9.
 */
function myReplace(str, before, after) {
    // 获取要替换的单词的第一个字母
    let char = before.charAt(0);

    // 如果是大写，那么替换的字符串的首字母大写
    if (char === char.toUpperCase()) {
        let code = after.charAt(0).toUpperCase();

        // 拼接字符串
        after = after.slice(1);
        after = code.concat(after)
    }

    // 替换字符串
    str = str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");