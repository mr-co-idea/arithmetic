// 数制间的相互转换
import { Stack } from '../index';
import { log } from '../../utils';

function transform(num: number, base: number): number[] {
	const s: Stack<number> = new Stack();

	do {
		s.push(num % base);
		num = Math.floor(num / base);
	} while (num > 0);

	let arr: number[] = [];
	while (s.length > 0) {
		arr.push(s.pop());
	}

	return arr;
};

// log(transform(10, 2)); // [1,0,1,0];