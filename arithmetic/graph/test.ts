// 测试用例
import { Graph } from '.';

// 初始化
let g:Graph = new Graph(5);

// 添加图
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

// 展示图
g.showGraph();