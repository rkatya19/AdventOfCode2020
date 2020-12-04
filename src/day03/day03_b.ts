import { getInput, tick, tock, BOX_GRN, BOX_WHT } from '../common.ts';

const input = await getInput(3);
const rows = input.split('\n');

const width = rows[0].trim().length;

let slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
let treesPerSlope: number[] = []


for (let slope of slopes) {
    var xPosition = 0
    var treeCount = 0

    for (let index = 0; index < rows.length; index += slope[1]) {
        // console.log(row.replaceAll('#', BOX_GRN + BOX_GRN).replaceAll('.', BOX_WHT + BOX_WHT));

        if (rows[index][xPosition] == '#') {
            treeCount++
        }
    
        xPosition = xPosition + slope[0]
    
        if (xPosition >= width) {
            xPosition = xPosition - width
        }
    }

    treesPerSlope.push(treeCount)
}

let result = treesPerSlope.reduce((prev, curr) => prev * curr)
console.log(result)
