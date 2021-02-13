// 数据测试平台类

import { setServers } from "dns";
import { log } from "../../../utils/log";

export class CArray {
	dataStore: number[] = [];
	pos: number = 0;
	numElements: number;
	gaps: number[] = [5, 3, 1];

	constructor(numElements: number) {
		this.numElements = numElements;

		for (let i = 0; i < this.numElements; i++) {
			this.dataStore[i] = i;
		}
	}

	setData() {
		for (let i = 0; i < this.numElements; ++i) {
			this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
		}
	}

	clear() {
		for (let i = 0; i < this.numElements; ++i) {
			this.dataStore[i] = 0;
		}
	}

	insert(element: number) {
		this.dataStore[this.pos++] = element;
	}

	toString(): string {
		let str: string = '';
		for (let i = 0; i < this.numElements; i++) {
			str += this.dataStore[i] + ' ';
			if (i % 10 === 0) {
				str + '\n';
			}
		}

		return str;
	}

	swap(arr: number[], index1: number, index2: number) {
		let temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	// 冒泡排序
	bubbleSort() {
		const numElements: number = this.dataStore.length;

		for (let outer = numElements; outer >= 2; --outer) {
			for (let inner = 0; inner <= outer - 1; ++inner) {
				if (this.dataStore[inner] > this.dataStore[inner + 1]) {
					this.swap(this.dataStore, inner, inner + 1);
				}
			}
		}

	}

	// 选择排序
	selectionSort() {
		const numElements: number = this.dataStore.length;
		let min: number;

		for (let outer = 0; outer < numElements - 1; ++outer) {
			min = outer;

			for (let inner = outer + 1; inner < numElements; ++inner) {
				if (this.dataStore[inner] < this.dataStore[min]) {
					min = inner;
				}
			}

			this.swap(this.dataStore, min, outer);
		}
	}

	// 插入排序
	insertionSort() {
		let temp: number, inner: number;

		for (let outer = 1; outer < this.dataStore.length; ++outer) {
			temp = this.dataStore[outer];
			inner = outer;

			while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
				this.dataStore[inner] = this.dataStore[inner - 1];
				--inner;
			}

			this.dataStore[inner] = temp;
		}
	}

	// 计算排序时间
	static count(sort: string, num: number) {
		const ctx = new CArray(num);

		const start: number = new Date().getTime();
		ctx[sort]();
		const end: number = new Date().getTime();

		log(`对${num}个元素，排序所用时间：`, end - start);
	}

	// 希尔排序
	shellsort() {
		for (let g = 0; g < this.gaps.length; ++g) {
			for (let i = this.gaps[g]; i < this.dataStore.length; ++i) {
				let temp = this.dataStore[i];
				let j = i;
				for (j; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
					this.dataStore[j] = this.dataStore[j - this.gaps[g]];
				}
				this.dataStore[j] = temp;
			}
		}
	}

	// 动态间隔希尔排序
	shellsort1() {
		let N: number = this.dataStore.length;
		let h: number = 1;

		while (h < N / 3) {
			h = h * 3 + 1;
		}

		while (h >= 1) {
			for (let i = h; i < N; i++) {
				for (let j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
					this.swap(this.dataStore, j, j - h);
				}
			}
			h = (h - 1) / 3;
		}
	}

	// 归并排序
	mergeArray(arr: number[], startLeft: number, stopLeft: number, startRight: number, stopRight: number) {
		let rightArr: number[] = new Array(stopRight - startRight + 1);
		let leftArr: number[] = new Array(stopLeft - startLeft + 1);

		let k: number = startRight;
		for (var i = 0; i < (rightArr.length - 1); ++i) {
			rightArr[i] = arr[k];
			++k;
		}

		k = startLeft;
		for (var i = 0; i < (leftArr.length - 1); ++i) {
			leftArr[i] = arr[k];
			++k;
		}

		rightArr[rightArr.length - 1] = Infinity; // 哨兵值
		leftArr[leftArr.length - 1] = Infinity; // 哨兵值 

		let m = 0;
		let n = 0;
		for (let k = startLeft; k < stopRight; ++k) {
			if (leftArr[m] <= rightArr[n]) {
				arr[k] = leftArr[m];
				m++;
			} else {
				arr[k] = rightArr[n];
				n++;
			}
		}
		log("left array - ", leftArr);
		log("right array - ", rightArr);
	}

	mergeSort() {
		if (this.dataStore.length < 2) {
			return;
		}

		let step: number = 1;
		let left: number, right: number;

		while (step < this.dataStore.length) {
			left = 0;
			right = step;

			while (right + step <= this.dataStore.length) {
				this.mergeArray(this.dataStore, left, left + step, right, right + step);
				left = right + step;
				right = left + step;
			}

			if (right < this.dataStore.length) {
				this.mergeArray(this.dataStore, left, left + step, right, this.dataStore.length);
			}

			step *= 2;
		}
	}
	// 快速排序
	qSort(list: number[]): Array<number> {
		if (list.length === 0) {
			return [];
		}

		let lesser: number[] = [];
		let greater: number[] = [];
		let pivot: number = list[0];

		for (let i = 1; i < list.length; i++) {
			if (list[i] < pivot) {
				lesser.push(list[i]);
			} else {
				greater.push(list[i]);
			}
		}

		return this.qSort(lesser).concat(pivot, this.qSort(greater));
	}
}
