/**
 * Created by ZHQ on 2017/7/17.
 */

let makeFriendlyDates = function (startDate, endDate) {
    // 判断输入的格式 2016-10-10
    let dateReg = /^(\d{4})-(\d{2})-(\d{2})$/;

    if (dateReg.test(startDate) && dateReg.test(endDate)) {
        console.log('正确的日期格式');

        // 在ES6中，变量的命名不要和参数相同，相同可能会导致错误
        // new Date() 中传入的参数如果是字符串会先调用Date.parse()函数将其解析为相应的毫秒数
        let start = new Date(startDate);
        let end = new Date(endDate);

        console.log(start.toDateString());         // Thu Oct 20 2016
        console.log(start.toISOString());          // 2016-10-20T00:00:00.000Z
        console.log(start.toJSON());               // 2016-10-20T00:00:00.000Z
        console.log(start.toLocaleDateString());   // 2016-10-20
        console.log(start.toLocaleString());       // 2016-10-20 08:00:00
        console.log(start.toLocaleTimeString());   // 08:00:00
        console.log(start.toString());             // Thu Oct 20 2016 08:00:00 GMT+0800 (中国标准时间)
        console.log(start.toTimeString());         // 08:00:00 GMT+0800 (中国标准时间)
        console.log(start.toUTCString());          // Thu, 20 Oct 2016 00:00:00 GMT
        console.log(start.valueOf());              // 1476921600000
        // Date.parse() 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数
        // 如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为NaN。

        // 获得年月日
        // getDay()函数是获得星期的
        let startYear = start.getFullYear(),
            startMonth = start.getMonth(),
            startDay = start.getDate();

        let endYear = end.getFullYear(),
            endMonth = end.getMonth(),
            endDay = end.getDate();

        let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let retDate = [];
        if (startYear == endYear) {
            if (startMonth == endMonth) {
                retDate[0] = monthName[startMonth] + ' ' + getSmallDay(startDay);
                retDate[1] = getSmallDay(endDay);
            } else {
                retDate[0] = monthName[startMonth]  + ' ' + getSmallDay(startDay);
                retDate[1] = monthName[endMonth]  + ' '+ getSmallDay(endDay);
            }
        } else {
            retDate[0] = monthName[startMonth] + ' ' + getSmallDay(startDay) + "," + startYear;
            retDate[1] = monthName[endMonth]  + ' '+ getSmallDay(endDay) + "," + endYear;
        }

        console.log(retDate);

    }

    function getSmallDay(d){
        d = parseInt(d);
        if(d===1 || d===21 || d===31){
            return d+"st";
        }
        else if(d===2 || d==22){
            return d+"nd";
        }
        else if(d===3 || d===23){
            return d+"rd";
        }
        else if((d>=4&&d<=20)||(d>=24&&d<=30)){
            return d+"th";
        }
    }
};

makeFriendlyDates('2016-10-20', '2017-02-01');
