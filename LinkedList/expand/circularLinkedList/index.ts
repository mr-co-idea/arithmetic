// 循环链表

import { log } from "../../../utils";
import { LinkedList, Node } from "../../LinkedList"

type HeadNode = Node<string>;

export class CircularLinkedList<T> extends LinkedList<T> {
	constructor() {
		super();
		this.head.next = this.head;
	}


	// 查找节点
	find(item: T | string): Node<T> | HeadNode {
		let currNode: Node<T> | HeadNode = this.head;

		while (currNode.element != item && currNode.next.element !== 'head') {
			currNode = currNode.next;
		}
		return currNode;
	}

	// 查找前一个节点
	findPrevious(item: T | string): Node<T> | HeadNode {
		let currNode: Node<T> | HeadNode = this.head;

		while (currNode.next.element != item && currNode.next.element !== 'head') {
			currNode = currNode.next;
		}
		return currNode;
	}

	// 展示元素
	display() {
		let currNode: Node<T> | HeadNode = this.head;

		while (currNode.next !== null && currNode.next.element !== 'head') {
			log(currNode.next.element);
			currNode = currNode.next;
		}
	}
}