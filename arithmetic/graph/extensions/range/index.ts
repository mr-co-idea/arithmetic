// 广度优先搜索
import { Graph } from '../../graph';
import { Queue } from '../../../../structure/Queue';
import { Stack } from '../../../../structure/Stack';
import { log } from '../../../../utils';

export class RangeGraph extends Graph {
	marked: boolean[] = new Array(this.vertices);
	edgeTo: number[] = new Array(this.vertices);

	constructor(vertices: number) {
		super(vertices);
		this.initializemark();
	}

	initializemark() {
		for (let i = 0; i < this.vertices; i++) {
			this.marked[i] = false;
		}
	}

	// 广度搜索
	bfs(s: number) {
		const queue: Queue<number> = new Queue();

		this.marked[s] = true;
		queue.enqueue(s);

		while (queue.length > 0) {
			const v = queue.dequeue();

			if (v !== undefined) {
				log('Visited vertex ', v);
			}

			for (let w of this.adj[v]) {
				if (!this.marked[w]) {
					this.edgeTo[w] = v;
					this.marked[w] = true;

					queue.enqueue(w);
				}
			}
		}
	}

	// 求最短路径
	pathTo(v: number, s?: number) {
		let source: number = 0;

		if (!this.marked[v]) {
			return undefined
		}

		let path: Stack<number> = new Stack();

		for (let i = v; i != source; i = this.edgeTo[i]) {
			path.push(i);
		}

		path.push(s ?? 0);

		return path;
	}
}