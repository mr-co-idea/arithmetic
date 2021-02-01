// 散列 HashTable 

import { log } from "../../utils";

export class HashTable {
	protected table: string[];

	constructor(len: number) {
		this.table = new Array(len);
	}

	// 计算散列值
	simpleHash(data: string): number {
		let total: number = 0;

		for (let i = 0; i < data.length; i++) {
			total += data.charCodeAt(i);
		}

		return total % this.table.length;
	}

	// 显示散列分布
	showDistro() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i] !== undefined) {
				log(`${i}：${this.table[i]}`);
			}
		}
	}

	// 存入数值
	put(data: string) {
		const pos: number = this.simpleHash(data);

		this.table[pos] = data;
	}

	// 取值

	get(data: string) {
		return this.table[this.simpleHash(data)];
	}
}
