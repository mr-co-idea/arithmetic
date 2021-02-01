// 集合

export class Set {
	#dataStore: unknown[];
	constructor() {
		this.#dataStore = new Array();
	}

	// 元素数量
	get size() {
		return this.#dataStore.length;
	}

	// 获取全部元素
	get items() {
		return this.#dataStore;
	}

	// 添加元素
	add(data: unknown): boolean {
		if (this.#dataStore.indexOf(data) < 0) {
			this.#dataStore.push(data);

			return true;
		} else {
			return false;
		}
	}

	// 移除元素
	remove(data: unknown): boolean {
		const pos: number = this.#dataStore.indexOf(data);

		if (pos > -1) {
			this.#dataStore.splice(pos, 1);

			return true;
		} else {
			return false;
		}
	}


	// 显示元素
	show() {
		return this.#dataStore;
	}

	// 检查元素是否存在
	contains(data: unknown): boolean {
		if (this.#dataStore.indexOf(data) < 0) {
			return false;
		};

		return true;
	}

	// 合并集合
	union(set: Set): Set {
		const newSet = new Set();
		const items = set.items;

		for (let item of this.#dataStore) {
			newSet.add(item);
		}

		for (let i = 0; i < set.size; i++) {
			if (!newSet.contains(items[i])) {
				newSet.add(items[i]);
			}
		}

		return newSet;
	}

	// 交集
	intersect(set: Set): Set {
		const newSet = new Set();

		for (let i = 0; i < this.size; i++) {
			if (set.contains(this.#dataStore[i])) {
				newSet.add(this.#dataStore[i]);
			}
		}

		return newSet;
	}

	// 子集
	subset(set: Set): boolean {
		if (this.size > set.size) {
			return false;
		} else {
			for (let item of this.#dataStore) {
				if (set.items.indexOf(item) < 0) {
					return false;
				}
			}
		}
		return true;
	}

	// 补集
	difference(set: Set): Set {
		const newSet: Set = new Set();

		for (let item of this.#dataStore) {
			if (!set.contains(item)) {
				newSet.add(item);
			}
		}

		return newSet;
	}
}