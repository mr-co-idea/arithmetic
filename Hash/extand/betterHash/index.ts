// 使用霍纳算法的处理函数

import { HashTable } from "../../HashTable";

export class BetterHash extends HashTable {
	constructor(length: number) {
		super(length);
	}

	// 计算键值
	betterHash(data: string): number {
		const H: number = 31;
		let total: number = 0;

		for (let i = 0; i < data.length; i++) {
			total += H*total + data.charCodeAt(i);
		}

		return total % this.table.length;
	}

	// 存入数据
	put(data: string) {
		const pos: number = this.betterHash(data);

		this.table[pos] = data;
	}
}