import { getInput, tick, tock, BOX_GRN, BOX_WHT } from '../common.ts';

const input = await getInput(6);
var rows = input.split('\n');
rows.push('')

var totalYeses = 0
var groupSize = 0
var questionDictionary: Map<string, number> = new Map();
for (let row of rows) {
    if (row == '') {
        questionDictionary.forEach(function(value, q) {
            if (value == groupSize) {
                totalYeses++
            }
        })
        questionDictionary.forEach((value, key) => questionDictionary.delete(key))
        groupSize = 0
        continue
    }

    groupSize++
    let questions = row.split('')
    questions.forEach(function(q) {
        if (!questionDictionary.has(q)) {
            questionDictionary.set(q, 1)
        } else {
            let incrementedValue = questionDictionary.get(q)! + 1
            questionDictionary.set(q, incrementedValue)
        }
    })
}

console.log(totalYeses)