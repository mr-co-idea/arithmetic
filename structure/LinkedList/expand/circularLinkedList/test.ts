// 循环链表测试用例
import { CircularLinkedList } from '.';
import { log } from '../../../../utils';

// 初始化
const list: CircularLinkedList<string> = new CircularLinkedList();

// 插入节点
list.insert('test1', 'head')
	.insert('test2', 'test1')
	.insert('test3', 'test2');

list.display();

// head
log(list.find('test3').next)