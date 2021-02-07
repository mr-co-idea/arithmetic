// 数据测试平台类

export class CArray {
	dataStore: number[] = [];
	pos: number = 0;
	numElements: number;

	constructor(numElements: number) {
		this.numElements = numElements;

		for (let i = 0; i < this.numElements; i++) {
			this.dataStore[i] = i;
		}
	}

	setData() {
		for (let i = 0; i < this.numElements; ++i) {
			this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
		}
	}

	clear() {
		for (let i = 0; i < this.numElements; ++i) {
			this.dataStore[i] = 0;
		}
	}

	insert(element: number) {
		this.dataStore[this.pos++] = element;
	}

	toString(): string {
		let str: string = '';
		for (let i = 0; i < this.numElements; i++) {
			str += this.dataStore[i] + ' ';
			if (i % 10 === 0) {
				str + '\n';
			}
		}

		return str;
	}

	swap(arr: number[], index1: number, index2: number) {
		let temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	// 冒泡排序
	bubbleSort() {
		const numElements: number = this.dataStore.length;

		for (let outer = numElements; outer >= 2; --outer) {
			for (let inner = 0; inner <= outer - 1; ++inner) {
				if (this.dataStore[inner] > this.dataStore[inner + 1]) {
					this.swap(this.dataStore, inner, inner + 1);
				}
			}
		}

	}

	// 选择排序
	selectionSort() {
		const numElements: number = this.dataStore.length;
		let min: number;

		for (let outer = 0; outer < numElements - 1; ++outer) {
			min = outer;

			for (let inner = outer + 1; inner < numElements; ++inner) {
				if (this.dataStore[inner] < this.dataStore[min]) {
					min = inner;
				}
			}

			this.swap(this.dataStore, min, outer);
		}
	}

	// 插入排序
	insertionSort() {
		let temp: number, inner: number;

		for (let outer = 1; outer < this.dataStore.length; ++outer) {
			temp = this.dataStore[outer];
			inner = outer;

			while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
				this.dataStore[inner] = this.dataStore[inner - 1];
				--inner;
			}

			this.dataStore[inner] = temp;
		}
	}
}
