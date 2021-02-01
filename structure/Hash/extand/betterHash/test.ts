import { BetterHash } from ".";

const someNames =
	["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

// 创建HashTable                       
const hTable = new BetterHash(137);

// 存入数据
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]);
}

// 显示数据
hTable.showDistro();