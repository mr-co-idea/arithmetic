// 字典表测试用例
import { Dictionary } from '.';
import { log } from '../utils';

// 初始化字典表
const pbook: Dictionary<string> = new Dictionary();

// 添加键值
pbook.add("Mike", "123")
	.add("David", "345")
	.add("Cynthia", "456");

// 查找
log("David's extension: " + pbook.find("David"));

// 移除并展示全部
pbook.remove("David");
pbook.showAll();
pbook.showAllSort();

// 长度
log(pbook.count);

// 清空
pbook.clear();
log(pbook.count);
