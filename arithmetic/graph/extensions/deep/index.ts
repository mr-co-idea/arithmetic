// 深度优先算法
import { log } from '../../../../utils';
import { Graph } from '../../graph';

export class DeepGraph extends Graph {
	marked: boolean[] = new Array(this.vertices);

	constructor(verticies: number) {
		super(verticies);
		this.initializemark();
	}

	initializemark() {
		for (let i = 0; i < this.vertices; i++) {
			this.marked[i] = false;
		}
	}

	// 搜索函数
	dfs(v: number) {
		this.marked[v] = true;

		if (this.adj[v] !== undefined) {
			log('Visited vertex ', v);
		}

		for (let w of this.adj[v]) {
			if (!this.marked[w]) {
				this.dfs(w);
			}
		}
	}

	// 拓扑排序
	topSort() {
		const stack: number[] = [];
		let visited: boolean[] = [];

		for (let i = 0; i < this.vertices; i++) {
			visited[i] = false;
		}

		for (let i = 0; i < this.vertices; i++) {
			if (visited[i] === false) {
				this.topSortHelper(i, visited, stack);
			}
		}

		for (let i = 0; i < stack.length; i++) {
			if (stack[i] != undefined) {
				log(stack[i]);
			}
		}
	}

	topSortHelper(v: number, visited: boolean[], stack: number[]) {
		visited[v] = true;

		for (let w of this.adj[v]) {
			if (!visited[w]) {
				this.topSortHelper(w, visited, stack);
			}
		}

		stack.push(v);
	}
}