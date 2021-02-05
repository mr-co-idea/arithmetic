// 测试用例
import { RangeGraph } from './index'

// 初始化
const g = new RangeGraph(5);

// 添加数据
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

// 展示图
g.showGraph();

// 广度优先搜索
g.bfs(0);