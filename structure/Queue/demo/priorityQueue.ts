// 优先队列
// 优先码越小优先级越高

import { log } from "../../../utils";
import { Queue } from "../queue";

class Patient {
	name: string;
	code: number;
	constructor(name: string, code: number) {
		this.name = name;
		this.code = code;
	}
}

class PriorityQueue extends Queue<Patient>{
	dequeue(): Patient {
		let entry: number;

		for (let i: number = 0; i < this.dataStore.length - 1; i++) {
			if (this.dataStore[i].code < this.dataStore[entry].code) {
				entry = i;
			}
		};

		return this.dataStore.splice(entry, 1)[0];
	}

	toString(): string {
		let str: string = '';

		for (let i: number = 0; i < this.dataStore.length; i++) {
			const { name, code } = this.dataStore[i];

			str += `
			The patient's name is ${name}
			code is ${code}
			`;
		}
		return str;
	}
}

function Main() {
	let p: Patient = new Patient("Smith", 5);
	const ed: PriorityQueue = new PriorityQueue();
	ed.enqueue(p);
	p = new Patient("Jones", 4);
	ed.enqueue(p);
	p = new Patient("Fehrenbach", 6);
	ed.enqueue(p);
	p = new Patient("Brown", 1);
	ed.enqueue(p);
	p = new Patient("Ingram", 1);
	ed.enqueue(p);
	log(ed.toString());
}

Main();