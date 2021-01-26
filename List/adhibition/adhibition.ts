// 应用
import { log } from '../../utils';
import { List } from '../List';
import * as fs from 'fs';
import * as path from 'path';

// 读取文件信息
const file = fs.readFileSync(path.resolve('books.txt'), { encoding: 'utf-8' });

// app
const moveList: List<string> = new List();

file.split('\n').map(e => {
	moveList.append(e.trim());
});

// customer
class Customer {
	name;
	movie;
};

const customerList: List<Customer> = new List();

// 展示列表清单
function displayList(list: List<string>) {
	for (list.front(); list.currPos < list.length; list.next()) {
		if (list instanceof Customer) {
			log(list.currentElement['name'] + '，' + list.currentElement['movie'])
		} else {
			log(list.currentElement);
		}
	}
}