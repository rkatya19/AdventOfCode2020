import { getInput, tick, tock, BOX_GRN, BOX_WHT } from '../common.ts';

const input = await getInput(4);
const grouped = input.replaceAll(' ', '\n');
const rows = grouped.split('\n');

var numValid = 0
var fieldDictionary: Map<string, number> = new Map();
for (let row of rows) {

    if (row == '') {
        if ((fieldDictionary.size == 8) || (fieldDictionary.size == 7 && !fieldDictionary.has('cid'))) {
            numValid++
        }
        fieldDictionary.forEach((value, key) => fieldDictionary.delete(key))
        continue
    }

    let field = row.split(':')
    fieldDictionary.set(field[0], 1)
}

console.log(numValid)
