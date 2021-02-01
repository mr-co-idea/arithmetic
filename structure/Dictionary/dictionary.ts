// 字典表

import { log } from "../../utils";

export class Dictionary<T>{
	dataStore: T[] = new Array();

	// 遍历
	static traverse(dictionary: Dictionary<unknown>, func: (key: string, value: unknown) => void) {
		for (let key in dictionary.dataStore) {
			// 双下文可以通过箭头函数来植入或者使用函数方法赋值
			// func.call(dictionary, key, dictionary.dataStore[key]);
			func(key,dictionary.dataStore[key]);
		}
	}

	curryTraverse(func: (key: string, value: T) => void) {
		Dictionary.traverse(this, func);
	}

	// 获取长度
	get count(): number {
		let n: number = 0;

		this.curryTraverse(() => { n++ });

		return n;
	}

	// 添加键值
	add(key: string, value: T): Dictionary<T> {
		this.dataStore[key] = value;

		return this;
	}

	// 移除键值
	remove(key: string) {
		delete this.dataStore[key];
	}

	// 查找键值
	find(key: string): T {
		return this.dataStore[key];
	}

	// 展示全部键值
	showAll() {
		this.curryTraverse((key, val) => {
			log(key + '--->' + val);
		});
	}

	// 展示全部键值
	showAllSort() {
		for(let key of Object.keys(this.dataStore).sort()){
			log(key + '--->' + this.dataStore[key]);
		}
	}

	// 清空
	clear() {
		this.curryTraverse((key) => {
			delete this.dataStore[key];
		})
	}
}