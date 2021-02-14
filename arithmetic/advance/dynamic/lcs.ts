// 寻找最长公共字串

function lcs(word1: string, word2: string): string {
	let max: number = 0;
	let index: number = 0;

	let lcsArray: Array<number[]> = new Array(word1.length + 1);

	for (let i = 0; i <= word1.length + 1; i++) {
		lcsArray[i] = new Array(word2.length + 1);

		for (let j = 0; j <= word2.length + 1; j++) {
			lcsArray[i][j] = 0;
		}
	}

	for (let i = 0; i <= word1.length; i++) {
		for (let j = 0; j <= word2.length; j++) {
			if (i == 0 || j == 0) {
				lcsArray[i][j] = 0;
			} else {
				if (word1[i - 1] == word2[j - 1]) {
					lcsArray[i][j] = lcsArray[i - 1][j - 1] + 1;
				} else {
					lcsArray[i][j] = 0;
				}
			}

			if (max < lcsArray[i][j]) {
				max = lcsArray[i][j];
				index = i;
			}
		}
	}

	console.info(lcsArray)
	let str: string = '';
	if (max == 0) {
		return '';
	} else {
		for (let i = index - max; i <= max; i++) {
			str += word2[i];
		}

		return str;
	}
}

const str:string = lcs('addcc', 'dddcc');
console.info(str);