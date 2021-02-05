// 图

import { log } from "../../utils";

// 顶点

export class Vertex<T> {
	label: T; // 顶点
	wasVisited: boolean; // 是否访问过

	constructor(label: T) {
		this.label = label;
	}
}

// 图
export class Graph {
	vertices: number;
	edgs: number = 0;
	adj: Array<number[]> = [];

	constructor(vertices: number) {
		this.vertices = vertices;
		this.initialize();
	}

	// 初始化
	protected initialize() {
		for (let i = 0; i < this.vertices; i++) {
			this.adj[i] = new Array<number>();
		}
	}

	// 添加边
	addEdge(v: number, w: number) {
		this.adj[v].push(w);
		this.adj[w].push(v);

		this.edgs++;
	}

	// 展示图
	showGraph() {
		for (let i = 0; i < this.vertices; i++) {
			log(`${i} -> `, ...this.adj[i]);
		}
	}
}