import { getInput, tick, tock, BOX_GRN, BOX_WHT } from '../common.ts';

const input = await getInput(3);
const rows = input.split('\n');

const width = rows[0].trim().length;

var xPosition = 0
var treeCount = 0
for (let [index, row] of rows.entries()) {
    // console.log(row.replaceAll('#', BOX_GRN + BOX_GRN).replaceAll('.', BOX_WHT + BOX_WHT));

    if (rows[index][xPosition] == '#') {
        treeCount++
    }

    xPosition = xPosition + 3

    if (xPosition >= width) {
        xPosition = xPosition - width
    }
}

console.log(treeCount)
