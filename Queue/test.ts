// 测试用例

import { Queue } from '.';
import { log } from '../utils';

// 初始化队列
var q = new Queue();

// 入队
q.enqueue("Meredith")
	.enqueue("Cynthia")
	.enqueue("Jennifer");
	
log(q.toString());

// 出队
q.dequeue();
log(q.toString());

// 队头和队尾
log("Front of queue: " + q.front);
log("Back of queue: " + q.back);