// 测试用例
import { log } from '../../../../utils';
import { GBST, GNode } from '.';
import { createInterface, ReadLine } from 'readline';

// 创建成绩
function getArray(length: number): number[] {
	let arr: number[] = new Array();

	for (let i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * 101);
	}

	return arr;
}

// 测试
const grades: number[] = getArray(100);
log(grades);

const gradeDistro: GBST<number, GNode<number>> = new GBST(GNode);

for (let i = 0; i < grades.length; i++) {
	let g: number = grades[i];

	if (gradeDistro.find(g) == null) {
		gradeDistro.insert(g);
	} else {
		gradeDistro.update(g);
	}
}

// 命令行输入要查询的成绩
const readline: ReadLine = createInterface(
	{
		input: process.stdin,
		output: process.stdout
	}
);

askSearch();
function askSearch() {
	readline.question('输入查找的成绩？\n', grade => {
		const g: GNode<number> = gradeDistro.find(parseInt(grade));
		console.log(g.count);
		askCountinue();
	})
}

function askCountinue() {
	readline.question('是否继续？\n', ans => {
		if (ans === 'no') {
			readline.close();
		} else {
			askSearch();
		}
	})
}


