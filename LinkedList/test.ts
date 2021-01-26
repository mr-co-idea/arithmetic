// 测试用例

import { LinkedList } from ".";

// 初始化链表
const cities: LinkedList<string> = new LinkedList();

// 插入元素
cities.insert("Conway", "head")
	.insert("Russellville", "Conway")
	.insert("Carlisle", "Russellville")
	.insert("Alma", "Carlisle");

cities.display();

// 删除元素
cities.remove('Carlisle');
cities.display();