// 递归实现
// 阶乘
import { log } from '../../utils';
import { Stack } from '../stack';

// 常规递归
namespace convention {
	export function factoral(n: number): number {
		if (n === 1) {
			return n * 1;
		} else {
			return n * factoral(--n);
		}
	}
}

// 使用栈模拟递归
namespace stack {
	export function factoral(n: number): number {
		const s: Stack<number> = new Stack();
		let result: number = n;

		while (n > 1) {
			s.push(--n);
		}

		while (s.length > 0) {
			result *= s.pop();
		}

		return result;
	}
}

log(convention.factoral(5)) // 120

log(stack.factoral(5)) // 120