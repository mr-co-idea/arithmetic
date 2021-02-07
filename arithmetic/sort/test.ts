// 排序

import { log } from "../../utils/log";
import { CArray } from "./app";

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
log(mynums.toString());

// 冒泡排序
// mynums.bubbleSort();
// log(mynums.toString());

// 选择排序
// mynums.selectionSort();
// log(mynums.toString());

// 插入排序
mynums.insertionSort();
log(mynums.toString());
