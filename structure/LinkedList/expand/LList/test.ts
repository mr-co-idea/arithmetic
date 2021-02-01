// 双向链表测试用例

import { LList } from ".";

// 初始化双向链表
const cities:LList<string> = new LList();

// 插入元素
cities.insert("Conway", "head")
	.insert("Russellville", "Conway")
	.insert("Carlisle", "Russellville")
	.insert("Alma", "Carlisle");
cities.display();

// 移除元素
cities.remove("Carlisle");
cities.display();

// 反向打印
cities.disReverse();