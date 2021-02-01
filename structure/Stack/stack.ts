// 栈

export class Stack<T>{
	_dataStore: T[] = [];
	_top: number = 0;

	// 栈长
	get length(): number {
		return this._top;
	}

	// 出栈
	pop(): T {
		return this._dataStore[--this._top];
	}

	// 入栈
	push(element: T): Stack<T> {
		this._dataStore[this._top++] = element;
		return this
	}

	// 获取栈头
	peak(): T {
		return this._dataStore[this._top - 1];
	}

	// 清空栈
	clear() {
		this._top = 0;
	}
}