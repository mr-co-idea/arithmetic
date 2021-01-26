// 测试用例
import { Stack } from '.';
import { log } from '../utils'

// 初始化栈
const s: Stack<string> = new Stack();

// 入栈
s.push("David").push("Raymond").push("Bryan");

// log(s.length); // 3
// log(s.peak()); // Bryan

// 出栈
const popped: string = s.pop();
// log(popped); // Bryan
// log(s.peak()); // Raymond

s.push("Cynthia");
// log(s.peak()); // Cynthia

// 清空栈
s.clear();
// log(s.length); // 0
// log(s.peak()); // undefined

s.push("Clayton");

// 获取栈头元素
log(s.peak()); // Clayton