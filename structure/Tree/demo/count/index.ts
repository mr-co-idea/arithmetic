// 判断成绩分布

import { BST, Node } from '../../index';

// 成绩节点
export class GNode<T> extends Node<T> {
	count: number = 0;
}

// 成绩二叉查找树
export class GBST<T, N extends GNode<T>> extends BST<T, N> {
	// 更新节点
	update(data: T): N {
		const grade: N = this.find(data);
		if (grade !== null) {
			grade.count ++;
		}

		return grade;
	}
}

