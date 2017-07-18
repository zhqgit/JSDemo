/**
 * Created by ZHQ on 2017/7/17.
 */
'use strict';

var isBigEnough = function isBigEnough(value) {
  return value >= 10;
};

var spraed = [12, 5, 8, 130, 44];

var filtered = spraed.filter(isBigEnough);

// filtered is [12, 130, 44]
//# sourceMappingURL=filter.js.map