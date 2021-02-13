// 排序

import { log } from "../../utils/log";
import { CArray } from "./app";

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
log(mynums.toString());

// 冒泡排序
// mynums.bubbleSort();

// 选择排序
// mynums.selectionSort();

// 插入排序
// mynums.insertionSort();

// CArray.count('bubbleSort', 10000);
// CArray.count('selectionSort', 10000);
// CArray.count('insertionSort', 10000);

// 希尔排序
// mynums.shellsort();
// mynums.shellsort1();

// 归并排序
// mynums.mergeSort();

// 快速排序
let qsort:number[] = mynums.qSort(mynums.dataStore);
log(...qsort)

// log(mynums.toString());