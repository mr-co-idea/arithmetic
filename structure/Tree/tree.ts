// 二叉查找树

import { log } from "../../utils";

export class Node<T>{
	data: T;
	left;
	right;

	constructor(data: T) {
		this.data = data;
	}

	// 展示数据
	show(): T {
		return this.data;
	}

}

export class BST<T, N extends Node<T>>{
	root: N;
	Node: { new(data: T): N };

	constructor(C: { new(data: T): N }) {
		this.Node = C;
	}

	// 插入节点
	insert(data: T) {
		// 新节点
		const node: N = new this.Node(data);

		if (this.root == null) { // 判断根节点是否为空
			this.root = node;
		} else { // 遍历BST
			let current: N = this.root;

			// 数值小的存入左树，其他存入右树
			while (true) {
				let parent: N = current;

				if (data < current.data) { // 左子树
					current = current.left;

					if (current == null) {
						parent.left = node;
						break;
					}
				} else { // 右子树
					current = current.right;

					if (current == null) {
						parent.right = node;
						break;
					}
				}
			}
		}
	}

	// 中序遍历
	static inOrder<K, N extends Node<K>>(node: N) {
		if (node != null) {
			this.inOrder(node.left);
			log(node.show());
			this.inOrder(node.right);
		}
	}

	// 先序遍历
	static prOrder<K, N extends Node<K>>(node: N) {
		if (node != null) {
			log(node.show());
			this.prOrder(node.left);
			this.prOrder(node.right);
		}
	}

	// 后序遍历
	static postOrder<K, N extends Node<K>>(node: N) {
		if (node != null) {
			this.postOrder(node.left);
			this.postOrder(node.right);
			log(node.show());
		}
	}

	// 获得最小值
	getMin(): T {
		let current: N = this.root;

		while (current.left != null) {
			current = current.left;
		}

		return current.data
	}

	// 获得最大值
	getMax(): T {
		let current: N = this.root;

		while (current.right != null) {
			current = current.right;
		}

		return current.data;
	}

	// 获取最小节点
	static getSmallest<T>(node: Node<T>) {
		let current: Node<T> = node;

		while (current.left != null) {
			current = current.left;
		}

		return current;
	}

	// 查找数值
	find(data: T): N {
		let current: N = this.root;

		while (current != null) {
			if (current.data == data) {
				return current;
			} else if (current.data > data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}

		return null;
	}

	// 删除节点
	remove(data: T) {
		this.root = BST.removeNode(this.root, data);
	}

	static removeNode<T, N extends Node<T>>(node: N, data: T): N {
		if (node == null) {
			return null;
		} else if (data == node.data) {
			// 没有子节点
			if (node.left == null && node.right == null) {
				return null;
			}
			// 没有左子树
			else if (node.left == null) {
				return node.right
			}
			// 没有右子树
			else if (node.right == null) {
				return node.left;
			}
			// 有两个子节点
			else {
				let tempNode: Node<T> = this.getSmallest<T>(node.right);
				node.data = tempNode.data;
				node.right = this.removeNode(node.right, tempNode.data);
				return node
			}
		} else if (data < node.data) {
			node.left = this.removeNode(node.left, data);
			return node;
		} else {
			node.right = this.removeNode(node.right, data);
			return node;
		}

	}
}