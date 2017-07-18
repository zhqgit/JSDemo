/**
 * Created by ZHQ on 2017/7/17.
 */
'use strict'

const isBigEnough = value => value >= 10;

let spraed = [12, 5, 8, 130, 44];

let filtered = spraed.filter(isBigEnough);

// filtered is [12, 130, 44]
