// 线性探测


import { log } from "../../../utils";

export class LinearHash<T>{
	#table: string[];
	#value: Array<T>;

	constructor() {
		this.#table = new Array(137);
		this.#value = new Array(137);
	}

	// 计算键值
	simpleHash(key: string) {
		let total: number = 0;

		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}

		return total % this.#table.length;
	}

	// 存入键值
	put(key: string, data: T) {
		let pos: number = this.simpleHash(key);

		while (this.#table[pos] !== undefined) {
			pos++;
		}

		this.#table[pos] = key;
		this.#value[pos] = data;
	}

	// 获取键值
	get(key: string) {
		let pos: number = this.simpleHash(key);

		while (this.#table[pos] !== key) {
			pos++;
		}

		return this.#value[pos];
	}

	showDistro() {
		for (let i = 0; i < this.#table.length; i++) {
			if (this.#table[i] !== undefined) {
				log(i + '：' + this.#table[i]);
			}
		}
	}
}