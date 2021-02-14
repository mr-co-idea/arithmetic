// 背包问题

import { log } from "../../../utils/log";

function ksack(values: number[], weights: number[], capacity: number): number {
	let load: number = 0;
	let i: number = 0;
	let w: number = 0;

	while (load < capacity && i < 4) {
		if (weights[i] <= capacity - load) {
			w += values[i];
			load += weights[i];
		} else {
			let r: number = (capacity - load) / weights[i];
			w += r * values[i];
			load += weights[i];
		}
		++i;
	}

	return w;
}

let items:string[] = ["A", "B", "C", "D"];
let values:number[] = [50, 140, 60, 60]; 
let weights:number[] = [5, 20, 10, 12]; 
let capacity:number = 30; 
log(ksack(values, weights, capacity)); // 显示220