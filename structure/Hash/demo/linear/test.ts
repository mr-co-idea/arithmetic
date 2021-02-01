import { LinearHash } from ".";

// 初始化
const hTable = new LinearHash<string>();

var someNames =
	["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

// 赋值
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i], someNames[i]);
}

// 分布
hTable.showDistro();