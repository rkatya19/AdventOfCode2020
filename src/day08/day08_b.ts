import { getInput, tick, tock } from '../common.ts';

const input = await getInput(8);
const instructions = input.split('\n');

var accumulator = 0
var instructionPtr = 0
let seen = new Uint16Array(instructions.length);

let flipped = new Uint16Array(instructions.length);
let instructionsCopy = instructions
var haveFlipped = false

enum operations {
    acc = "acc",
    jmp = "jmp",
    nop = "nop"
}

while (true) {
    if (instructionPtr >= instructions.length) {
        break
    }

    let current = instructionsCopy[instructionPtr]
    let operation = current.split(' ')[0]
    let argument = parseInt(current.split(' ')[1])

    if (!flipped[instructionPtr] && !haveFlipped) {
        operation = (operation == operations.acc) ? operations.acc : (operation == operations.jmp) ? operations.nop : operations.jmp
        instructionsCopy[instructionPtr] = operation + ' ' + argument.toString()

        flipped[instructionPtr] = 1
        haveFlipped = true
    }

    if (seen[instructionPtr]) {
        seen.fill(0)
        instructionPtr = 0
        accumulator = 0
        haveFlipped = false
        instructionsCopy = input.split('\n');
        continue
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