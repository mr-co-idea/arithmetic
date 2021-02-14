// 背包问题

import { log } from "../../../utils";

function max(a: number, b: number): number {
	return a > b ? a : b;
}

// 递归
function knapsack(capacity: number, size: number[], value: number[], n: number): number {
	if (capacity == 0 || n == 0) {
		return 0;
	}
	if (size[n - 1] > capacity) {
		return knapsack(capacity, size, value, n - 1);
	} else {
		return max(value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
			knapsack(capacity, size, value, n - 1))
	}
}

// 动态规划
function dKnapsack(capacity: number, size: number[], value: number[], n: number): number {
	let K: Array<number[]> = [];

	for (let i = 0; i <= capacity + 1; i++) {
		K[i] = []
	}

	for (let i = 0; i <= n; i++) {
		for (let w = 0; w <= capacity; w++) {
			if (i == 0 || w == 0) {
				K[i][w] = 0;
			} else if (size[i - 1] <= w) {
				K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]], K[i - 1][w]);
			} else {
				K[i][w] = K[i - 1][w];
			}
		}
		log(...K[i]);
	}

	return K[n][capacity]
}


// 测试
const value: number[] = [4, 5, 10, 11, 13];
const size: number[] = [3, 4, 7, 8, 9];
const capacity: number = 16;
const n: number = 5;
// log(knapsack(capacity, size, value, n));
log(dKnapsack(capacity, size, value, n));