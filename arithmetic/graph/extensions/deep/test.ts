// 测试用例
import { DeepGraph } from '.';

// 初始化
const g = new DeepGraph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

// 展示图
g.showGraph();

// 深度优先搜索
g.dfs(0);