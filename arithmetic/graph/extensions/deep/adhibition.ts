// 拓扑排序
import { DeepGraph } from '.';

// 初始化
const g = new DeepGraph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);

// 展示图
g.showGraph();

g.dfs(0);
// 拓扑排序
g.topSort();
