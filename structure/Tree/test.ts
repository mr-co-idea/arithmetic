// 测试用例

import { BST, Node } from ".";
import { log } from "../../utils";

// 初始化
const nums: BST<number, Node<number>> = new BST(Node);
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

// 中序遍历
// BST.inOrder<number,Node<number>>(nums.root);

// 先序遍历
// BST.prOrder<number,Node<number>>(nums.root);

// 后序遍历
BST.postOrder<number,Node<number>>(nums.root);

// 最小值
const min: number = nums.getMin();
// log(min);

// 最大值
const max: number = nums.getMax();
// log(max);

// 查找
const node: Node<number> = nums.find(37);
// log(node);

// 删除节点
// nums.remove(23);
// BST.inOrder<number>(nums.root);