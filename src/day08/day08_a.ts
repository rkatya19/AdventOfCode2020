import { getInput, tick, tock } from '../common.ts';

const input = await getInput(8);
const instructions = input.split('\n');

var accumulator = 0
var instructionPtr = 0
let seen = new Uint16Array(instructions.length);

enum operations {
    acc = "acc",
    jmp = "jmp",
    nop = "nop"
}

while (true) {
    let current = instructions[instructionPtr]
    let operation = current.split(' ')[0]
    let argument = parseInt(current.split(' ')[1])

    if (seen[instructionPtr] == 1) {
        break
    }

    seen[instructionPtr] = 1

    switch(operation) { 
        case operations.acc: { 
            accumulator += argument 
            instructionPtr++
            break
        } 
        case operations.jmp: { 
            instructionPtr += argument
            break
        } 
        case operations.nop: { 
            instructionPtr++
            break
         } 
        default: { 
           break; 
        } 
     } 
}

console.log(accumulator)