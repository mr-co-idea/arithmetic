// 队列排序（基数排序）
import { Queue } from '../queue';
import { log } from '../../../utils';

type NumberQueue = Queue<number>;

// 分配
function distribute(nums: number[], queues: NumberQueue[], n: number, digit: number) {
	for (let i: number = 0; i < n; ++i) {
		if (digit === 1) {
			queues[nums[i] % 10].enqueue(nums[i]);
		} else {
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
		}
	}
}

// 收集
function collect(queues: Array<NumberQueue>, nums: number[]) {
	let i: number = 0;

	for (let digit: number = 0; digit < queues.length; ++digit) {
		while (!queues[digit].empty) {
			nums[i++] = queues[digit].dequeue();
		}
	}
}

function disArray(nums: number[]) {
	let print = '';

	nums.map(e => print += (e.toString() + ' '));

	log(print);
}

function Main() {
	let queues: NumberQueue[] = [];
	for (let i: number = 0; i < 10; i++) {
		queues.push(new Queue());
	}

	let nums: number[] = [];

	for (let i: number = 0; i < 10; i++) {
		nums.push(Math.floor(Math.floor(Math.random() * 101)));
	}

	log('Before radix sort: ');
	disArray(nums);

	distribute(nums, queues, 10, 1);
	collect(queues, nums);

	distribute(nums, queues, 10, 10);
	collect(queues, nums);
	log('After radix sort: ');
	disArray(nums);
}

Main();