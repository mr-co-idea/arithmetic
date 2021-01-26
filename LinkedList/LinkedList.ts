// 链表
import { log } from "../utils";

// 节点
export class Node<T>{
	element: T;
	next: Node<string | T> = null;

	constructor(element: T) {
		this.element = element;
	}
}

// 头节点
type HeadNode = Node<string>;

// 链
export class LinkedList<T>{
	// 头节点
	head: HeadNode = new Node('head');

	// 查找节点
	find(item: T | string): Node<T> | HeadNode {
		let currNode: Node<T> | HeadNode = this.head;

		while (currNode.element != item) {
			currNode = currNode.next;
		}
		return currNode;
	}

	// 插入节点
	insert(newElement: T, item: T): LinkedList<T> {
		const newNode: Node<T> = new Node(newElement);

		const currNode: Node<T> | HeadNode = this.find(item);

		newNode.next = currNode.next;
		currNode.next = newNode;

		return this;
	}

	// 查找前一个节点
	findPrevious(item: T | string): Node<T> | HeadNode {
		let currNode: Node<T> | HeadNode = this.head;

		while (currNode.next !== null && currNode.next.element != item) {
			currNode = currNode.next;
		}
		return currNode;
	}

	// 移除节点
	remove(item: T) {
		const prevNode: Node<T> | HeadNode = this.findPrevious(item);

		if (prevNode.next !== null) {
			prevNode.next = prevNode.next.next;
		}
	}

	// 展示元素
	display() {
		let currNode: Node<T> | HeadNode = this.head;

		while (currNode.next !== null) {
			log(currNode.next.element);
			currNode = currNode.next;
		}
	}
}