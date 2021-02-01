// 判断是否是回文
import { Stack } from '../index';
import { log } from '../../../utils';

function isPalindrome(word: string): boolean {
	const s: Stack<string> = new Stack();

	for (let i: number = 0; i < word.length; i++) {
		s.push(word[i]);
	}

	let rword: string = '';
	while (s.length > 0) {
		rword += s.pop();
	}

	return word === rword;
}

log(isPalindrome('hello')); // false
log(isPalindrome('racecar')); // true