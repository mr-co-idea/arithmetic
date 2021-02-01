// 测试
import { Set } from '.';
import { log } from '../utils';

// 初始化
const names = new Set();

// 添加元素
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");

if (names.add("Mike")) {
	log("Mike added")
} else {
	log("Can't add Mike, must already be in set");
}

// 显示
// log(names.show());

// 移除
const removed = "Mike";
if (names.remove(removed)) {
	log(removed + " removed.");
}

// 新集合
const otherNames = new Set();
otherNames.add('Raymond');
otherNames.add('Cynthia');
otherNames.add('Jonathan');

// 并集
const newSet:Set = names.union(otherNames);
// log(newSet.show());

// 交集
const newSet2:Set = names.intersect(otherNames);
// log(newSet2.show());

// 子集
log(otherNames.subset(names));

// 补集
log(names.difference(otherNames).show());