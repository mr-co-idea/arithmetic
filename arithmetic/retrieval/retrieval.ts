// 检索算法

import { loadavg } from "os";

// 顺序搜索
export function reqSearch<T>(arr: T[], data: T): number {
	for (let i = 0; i < arr.length; i++) {
		if (data === arr[i]) return i;
	}

	return -1;
}

// 优化
function swap<T>(arr: T[], index1: number, index2: number) {
	let temp: T = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

export function newReqSearch<T>(arr: T[], data: T): boolean {
	for (let i = 0; i < arr.length; i++) {
		// if (data === arr[i]) {
		// 	if (i > 0) {
		// 		swap(arr, i, i - 1);
		// 	}
		// 	return true;
		// }

		// 80-20原则
		if (data === arr[i] && i > arr.length * 0.2) {
			swap(arr, i, 0);
		} else if (data === arr[i]) {
			return true;
		}
	}

	return false;
}

// 二分法查找
export function binSearch(arr: number[], data: number): number {
	let lower: number = 0;
	let upper: number = arr.length - 1;

	while (lower <= upper) {
		const mid: number = Math.floor((lower + upper) / 2);

		if (arr[mid] > data) {
			upper = mid - 1;
		} else if (arr[mid] < data) {
			lower = mid + 1;
		} else {
			return mid
		}
	}

	return -1;
}

// 计算重复次数
export function count(arr: number[], data: number) {
	let count: number = 0;
	let position: number = binSearch(arr, data);

	if (position > -1) {
		count++;

		for (let i = position - 1; i > 0; i--) {
			if (arr[i] === data) {
				count++;
			} else {
				break;
			}
		}

		for (let i = position + 1; i < arr.length; i++) {
			if (arr[i] === data) {
				count++;
			} else {
				break;
			}
		}
	}

	return count;
}