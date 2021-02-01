// 双向链表

import { log } from '../../../../utils';
import { LinkedList, Node } from '../../LinkedList';

// 节点
class LNode<T> extends Node<T>{
	previous: LNode<T> | HeadNode = null;
	next: LNode<T> | HeadNode = null;

	constructor(element: T) {
		super(element);
	}

}

type HeadNode = LNode<string>;

export class LList<T> extends LinkedList<T>{
	head: HeadNode;

	constructor() {
		super();
		this.head = new LNode('head');
	}

	// 查找节点
	find(item: T | string): LNode<T> | HeadNode {
		let currNode: LNode<T> | HeadNode = this.head;

		while (currNode.element != item) {
			currNode = currNode.next;
		}
		return currNode;
	}

	// 插入节点
	insert(element: T, item: T): LList<T> {
		const newNode: LNode<T> = new LNode(element);
		const currNode: LNode<T> | HeadNode = this.find(item);

		newNode.previous = currNode;
		newNode.next = currNode.next;
		currNode.next = newNode;

		return this;
	}

	// 删除节点
	remove(item: T) {
		const currNode: LNode<T> | HeadNode = this.find(item);

		if (currNode !== null) {
			currNode.previous.next = currNode.next;
			currNode.next.previous = currNode.previous;
			currNode.next = null;
			currNode.previous = null;
		}
	}

	// 最后一个节点
	findLast(): LNode<T> | HeadNode {
		let currNode: LNode<T> | HeadNode = this.head;

		while (currNode.next !== null) {
			currNode = currNode.next;
		}

		return currNode;
	}

	// 反序显示
	disReverse() {
		let currNode: LNode<T> | HeadNode = this.findLast();

		while (currNode.previous) {
			log(currNode.element);
			currNode = currNode.previous;
		}
	}
}