// 求最小路径
import { log } from '../../../../utils';
import { RangeGraph } from '.';

const g = new RangeGraph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.bfs(0);

let vertex = 4;
let paths = g.pathTo(vertex);
let logger:string[] = [];
while (paths.length > 0) {
	if (paths.length> 1) {
		logger.push(paths.pop() + '-');
	} else {
		logger.push(paths.pop().toString());
	}
}

log(...logger)