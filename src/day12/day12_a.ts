import { getInput, tick, tock } from '../common.ts';

const input = await getInput(12);
const instructions = input.split('\n');

enum NavAction {
    N = "N",
    S = "S", 
    E = "E", 
    W = "W", 
    L = "L", 
    R = "R", 
    F = "F"
}

let xPos = 0
let yPos = 0

//N = 0, E = 1, S = 2, W = 3
let direction = 1
for (let instruction of  instructions) {
    let action = instruction.split('')[0]
    let value = parseInt(instruction.slice(1, instruction.length))

    switch (action) {
        case NavAction.N: {
            yPos += value
            break
        }
        case  NavAction.S: { 
            yPos -= value
            break
        } 
        case  NavAction.E: { 
            xPos += value
            break
        }
        case  NavAction.W: { 
            xPos -= value
            break
        }
        case  NavAction.L: {
            let rotation = value/90 
            direction -= rotation
            if (direction < 0) {
                direction = (4 + direction)
            }
            break
        }
        case  NavAction.R: { 
            let rotation = value/90 
            direction += rotation
            if (direction > 3) {
                direction = (direction - 4)
            }
            break
        }
        case  NavAction.F: { 
            if (direction == 0) {
                yPos += value
            } else if (direction == 1) {
                xPos += value
            }
            else if (direction == 2) {
                yPos -= value
            }
            else if (direction == 3) {
                xPos -= value
            }
            break
        }
        default: { 
           break; 
        } 
    }
}

let manhattan = Math.abs(xPos) + Math.abs(yPos)
console.log(manhattan)