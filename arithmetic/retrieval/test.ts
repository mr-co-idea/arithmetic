// 测试用例
import { log } from '../../utils';
import { CArray } from '../sort/app'
import { newReqSearch, binSearch, count } from './retrieval';
import { createInterface, ReadLine } from 'readline';

// 创建数据
let nums: number[] = [];
for (let i = 0; i < 10; ++i) {
	nums[i] = Math.floor(Math.random() * 11);
}

// log(...nums);

const readLine: ReadLine = createInterface({ input: process.stdin, output: process.stdout });

// 插入排序
function insertionSort(arr: number[]) {
	for (let i = 1; i < arr.length; i++) {
		const temp = arr[i];
		let j = i;

		while (j > 0 && temp < arr[j - 1]) {
			arr[j] = arr[j - 1];
			j--;
		}

		arr[j] = temp;
	}
}

insertionSort(nums);
log(...nums)

readLine.question('请输入要查询的数据\n', ans => {
	// newReqSearch(nums, Number(ans));

	// const result: number = binSearch(nums, Number(ans));

	const result: number = count(nums, Number(ans));

	log(result);

	// log(...nums);
	readLine.close();
})

