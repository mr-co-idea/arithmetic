// 方块舞

import { Queue } from '../queue';
import { log } from '../../../utils';
import * as fs from 'fs';
import * as path from 'path';

class Dancer {
	name: string;
	sex: string;

	constructor(name: string, sex: string) {
		this.name = name;
		this.sex = sex;
	}
}

type DanceQueue = Queue<Dancer>;

function getDancer(males: DanceQueue, females: DanceQueue) {
	const data: string = fs.readFileSync(path.resolve('people.txt'), { encoding: 'utf-8' });

	const data_arr: string[] = data.split('\n');

	data_arr.map(e => {
		const [sex, name] = e.split(' ');

		if (sex === 'M') {
			males.enqueue(new Dancer(name.trim(), sex));
		} else {
			females.enqueue(new Dancer(name.trim(), sex));
		}
	});
}

function dance(males: DanceQueue, females: DanceQueue) {
	log('The dance partners are: \n');

	while (!males.empty && !females.empty) {
		const male: Dancer = males.dequeue();
		const female: Dancer = females.dequeue();

		log('Female dancer is: ' + male.name);
		log('Male dancer is: ' + female.name);
		log('\n');
	}

	if (males.empty) {
		log(females.front.name + ' is waiting to dance');
	} else if (females.empty) {
		log(males.front.name + ' is waiting to dance');
	}
}


// 运行
function Main() {
	const males: DanceQueue = new Queue();
	const females: DanceQueue = new Queue();

	getDancer(males, females);

	dance(males, females);
}

Main();

