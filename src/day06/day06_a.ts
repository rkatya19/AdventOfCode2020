import { getInput, tick, tock, BOX_GRN, BOX_WHT } from '../common.ts';

const input = await getInput(6);
var rows = input.split('\n');
rows.push('')

var totalYeses = 0
var questionDictionary: Map<string, number> = new Map();
for (let row of rows) {
    if (row == '') {
        totalYeses += questionDictionary.size
        questionDictionary.forEach((value, key) => questionDictionary.delete(key))
        continue
    }

    let questions = row.split('')
    questions.forEach((q) => questionDictionary.set(q, 1))
}

console.log(totalYeses)