import { getInput, tick, tock, BOX_GRN, BOX_WHT } from '../common.ts';

const input = await getInput(5);
var passes = input.split('\n');

let seatIDs = []

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
    seatIDs.push(seatID)
}

seatIDs = seatIDs.sort()

let prevSeatID = seatIDs[0]
for (let index = 1; index < seatIDs.length; index++) {
    if (seatIDs[index] != (prevSeatID + 1)) {
        console.log(seatIDs[index] - 1)
        break
    }
    prevSeatID = seatIDs[index]
}