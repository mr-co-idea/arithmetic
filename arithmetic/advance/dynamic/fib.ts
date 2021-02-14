// 斐波那契数组 --- 序列是由前两项数值相加而成的 [0,1,1,2,3,5,...]

import { log } from "../../../utils";

// 递归实现
function recurFib(n: number): number {
	if (n < 2) {
		return n
	} else {
		return recurFib(n - 1) + recurFib(n - 2);
	}
}

// 迭代实现
function iterFib(n: number): number {
	let last: number = 1;
	let nextLast: number = 1;
	let result: number = 1;

	for (let i = 2; i < n; i++) {
		result = last + nextLast;
		nextLast = last;
		last = result;
	}

	return result
}

// 动态规划实现
function dynFib(n: number): number {
	let arr: number[] = [];

	for (let i = 0; i < n; i++) {
		arr[i] = 0;
	}

	if (n == 1 || n == 2) {
		return 1;
	} else {
		arr[1] = 1;
		arr[2] = 2;
		for (let i = 3; i <= n; i++) {
			arr[i] = arr[i - 1] + arr[i - 2];
		}

		return arr[n - 1];
	}
}



function test(func: Function, n: number) {
	const start: number = new Date().getTime();

	log(func(n));

	const end: number = new Date().getTime();

	log('耗时' + (end - start) + ' 秒');
}

test(recurFib, 20);
test(iterFib, 20);
test(dynFib, 20);