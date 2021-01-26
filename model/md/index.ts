// 创建readme文件

import * as fs from 'fs';
import * as path from 'path';

export function createMD(dir: string, name: string) {
	const original: string = fs.readFileSync(path.resolve(__dirname, 'readme.md'), { encoding: 'utf-8' });

	const data: string = original.replace('$name', name);

	fs.writeFileSync(path.join(__dirname, '../../' + dir + '/readme.md'), data);
}
