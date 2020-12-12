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

let shipX = 0
let shipY = 0

let waypointX = shipX + 10
let waypointY = shipY + 1

for (let instruction of  instructions) {
    let action = instruction.split('')[0]
    let value = parseInt(instruction.slice(1, instruction.length))

    switch (action) {
        case NavAction.N: {
            waypointY += value
            break
        }
        case  NavAction.S: { 
            waypointY -= value
            break
        } 
        case  NavAction.E: { 
            waypointX += value
            break
        }
        case  NavAction.W: { 
            waypointX -= value
            break
        }
        case  NavAction.L: {
            let rotation = value/90 
            if (Math.abs(rotation % 2) == 1) {
                let prevX = waypointX
                waypointX = waypointY
                waypointY = prevX
                if (rotation == 1) waypointX *= -1
                if (rotation == 3) waypointY *= -1
            } else {
                if (rotation == 2) {
                    waypointX *= -1
                    waypointY *= -1
                } 
            }
            break
        }
        case  NavAction.R: { 
            let rotation = value/90 
            if (Math.abs(rotation % 2) == 1) {
                let prevX = waypointX
                waypointX = waypointY
                waypointY = prevX
                if (rotation == 1) waypointY *= -1
                if (rotation == 3) waypointX *= -1
            } else {
                if (rotation == 2) {
                    waypointX *= -1
                    waypointY *= -1
                } 
            }
            break
        }
        case  NavAction.F: { 
            shipX += value * waypointX
            shipY += value * waypointY
            break
        }
        default: { 
           break; 
        } 
    }
}

let manhattan = Math.abs(shipX) + Math.abs(shipY)
console.log(manhattan)