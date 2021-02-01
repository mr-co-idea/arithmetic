// 测试用例
import { log } from '../../utils'
import { List } from '.';

const names:List<string> = new List();

names.append('Clayton')
	.append('Raymond')
	.append('Cynthia')
	.append('Jennifer')
	.append('Bryan')
	.append('Danny');

names.front();
// log(names.currentElement); // Clayton

names.next();
// log(names.currentElement); // Raymond

for (names.front(); names.currPos < names.length; names.next()) {
	log(names.currentElement);
}

