// 开链法

import { log } from "../../../../utils";

export class ChainHash<T>{
	#table: Array<Array<T | string>>;

	constructor() {
		this.#table = new Array(137);
		this.buildChains();
	}

	// 计算键值
	simpleHash(key: string) {
		let total: number = 0;

		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}

		return total % this.#table.length;
	}

	// 链式存储化
	buildChains() {
		for (let i = 0; i < this.#table.length; i++) {
			this.#table[i] = new Array<T>();
		}
	}

	// 存入键值
	put(key: string, data: T) {
		const x: number = this.simpleHash(key);
		let y: number = 0;

		if (this.#table[x][y] == undefined) {
			this.#table[x][y] = key;
			this.#table[x][y + 1] = data;
		} else {
			while (this.#table[x][y] != undefined) {
				++y;
			}
			this.#table[x][y] = key;
			this.#table[x][y + 1] = data;
		}
	}

	// 获取键值
	get(key: string) {
		const x: number = this.simpleHash(key);
		let y: number = 0;

		if (this.#table[x][y] === key) {
			return this.#table[x][y + 1];
		} else {
			while (this.#table[x][y] !== key) {
				y += 2;
			}

			return this.#table[x][y + 1];
		}
	}

	showDistro() {
		for (let i = 0; i < this.#table.length; i++) {
			if (this.#table[i].length > 0) {
				log(this.#table[i]);
			}
		}
	}
}