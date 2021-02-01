// 队列

interface queue {
	toString: () => string;
}

export class Queue<T extends queue>{
	dataStore: T[] = [];

	// 队头
	get front(): T {
		return this.dataStore[0];
	}

	// 队尾
	get back(): T {
		return this.dataStore[this.dataStore.length - 1];
	}

	// 队长
	get length(): number {
		return this.dataStore.length;
	}

	// 队是否为空
	get empty(): boolean {
		return this.dataStore.length === 0
	}

	// 入队
	enqueue(element: T): Queue<T> {
		this.dataStore.push(element);
		return this;
	}

	// 出队
	dequeue(): T {
		return this.dataStore.shift();
	}

	// 队伍内容转化为string
	toString(): string {
		let temp: string = ``;

		for (let i: number = 0; i < this.dataStore.length; i++) {
			temp += this.dataStore[i].toString() + '\n';
		};

		return temp;
	}
}