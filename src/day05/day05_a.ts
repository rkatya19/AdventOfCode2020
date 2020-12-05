import { getInput, tick, tock, BOX_GRN, BOX_WHT } from '../common.ts';

const input = await getInput(5);
var passes = input.split('\n');

let maximumSeatID = 0

for (let pass of passes) {
    var re = new RegExp(/[BFLR]/g)
    pass = pass.replace(re, function(match) { 
        if (match == 'B' || match == 'R') {
            return '1'
        } else if (match == 'F' || match == 'L') {
            return '0'
        } else {
            return ''
        }
    })

    let seatID = parseInt(pass, 2)

    maximumSeatID = seatID > maximumSeatID ? seatID : maximumSeatID
}

// Initial Solution
/*
for (let pass of passes) {
    let minimumRows = 0
    let maximumRows = 127
    let minimumColumns = 0
    let maximumColumns = 7

    for (var i = 0; i < pass.length; i++) {
        if (pass[i] == 'F') {
            maximumRows = maximumRows - Math.ceil((maximumRows-minimumRows)/2)
        } else if (pass[i] == 'B') {
            minimumRows = minimumRows + Math.ceil((maximumRows-minimumRows)/2)
        } else if (pass[i] == 'L') {
            maximumColumns = maximumColumns - Math.ceil((maximumColumns-minimumColumns)/2)
        } else if (pass[i] == 'R') {
            minimumColumns = minimumColumns + Math.ceil((maximumColumns-minimumColumns)/2)
        }
    }

    let seatID = maximumRows * 8 + maximumColumns
    maximumSeatID = seatID > maximumSeatID ? seatID : maximumSeatID
}
*/

console.log(maximumSeatID)
