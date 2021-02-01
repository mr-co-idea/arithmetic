// 列表类

interface Value {
	toString(): string
}

export class List<T extends Value>{
	_listSize: number = 0; // 列表长度
	_pos: number = 0; // 当前位置
	_dataStore: T[] = []; // 数据存储

	// 获取列表长度
	get length(): number {
		return this._listSize
	}

	//获取当前位置
	get currPos(): number {
		return this._pos;
	}

	// 返回当前位置元素
	get currentElement(): T {
		return this._dataStore[this._pos];
	}

	/**
	 * 末尾添加元素
	 * @param element 
	 */
	append(element: T): List<T> {
		this._dataStore[this._listSize++] = element;
		return this
	}

	/**
	 * 查找元素位置
	 * @param element 
	 */
	find(element: T): number {
		for (let i: number; i < this._listSize; ++i) {
			if (element === this._dataStore[i]) {
				return i
			}
		}
		return -1;
	}

	/**
	 * 移除元素
	 * @param element 
	 */
	remove(element: T): boolean {
		const foundAt: number = this.find(element);

		if (foundAt > -1) {
			this._dataStore.splice(foundAt, 1);
			--this._listSize;
			return true;
		}

		return false;
	}

	/**
	 * 返回列表字符串
	 */
	toString(): string {
		return this._dataStore.toString();
	}

	/**
	 * 在某个元素后插入新元素
	 * @param element 
	 * @param after 
	 */
	insert(element: T, after: T): boolean {
		const insertPos: number = this.find(after);

		if (insertPos > -1) {
			this._dataStore.splice(insertPos + 1, 0, element);
			++this._listSize;
			return true;
		}

		return false;
	}

	/**
	 * 清空列表
	 */
	clear() {
		delete this._dataStore;
		this._listSize = 0;
		this._pos = 0;
	}

	/**
	 * 查找元素是否存在
	 * @param element 
	 */
	contain(element: T): boolean {
		if (this.find(element) > -1) {
			return true;
		}

		return false;
	}

	// 遍历列表

	front() {
		this._pos = 0;
	}

	end() {
		this._pos = this._listSize - 1;
	}

	prev() {
		// if (this._pos > 0) {
		--this._pos;
		// }
	}

	next() {
		// if (this._pos < this._listSize - 1) {
		++this._pos
		// }
	}

	moveTo(position: number) {
		return this._pos;
	}
}