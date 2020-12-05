import { getInput, tick, tock, BOX_GRN, BOX_WHT } from '../common.ts';

const input = await getInput(4);
const grouped = input.replaceAll(' ', '\n');
const rows = grouped.split('\n');
const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']

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
    // byr (Birth Year) - four digits; at least 1920 and at most 2002
    if (field[0] == fields[0]) {
        if (numberWithinBounds(parseInt(field[1]), 1920, 2002)) {
            fieldDictionary.set(field[0], 1)
        }
    } // iyr (Issue Year) - four digits; at least 2010 and at most 2020
    else if (field[0] == fields[1]) {
        if (numberWithinBounds(parseInt(field[1]), 2010, 2020)) {
            fieldDictionary.set(field[0], 1)
        }  
    } // eyr (Expiration Year) - four digits; at least 2020 and at most 2030
    else if (field[0] == fields[2]) {
        if (numberWithinBounds(parseInt(field[1]), 2020, 2030)) {
            fieldDictionary.set(field[0], 1)
        }  
    } // hgt (Height) - a number followed by either cm (at least 150 and at most 193) or in (at least 59 and at most 76)
    else if (field[0] == fields[3]) {
        let heightValue = field[1].substring(0, field[1].length-2)
        let heightUnit = field[1].substring(field[1].length-2, field[1].length)

        if (heightUnit == 'cm' && numberWithinBounds(parseInt(heightValue), 150, 193)) {
            fieldDictionary.set(field[0], 1)
        } else if (heightUnit == 'in' && numberWithinBounds(parseInt(heightValue), 59, 76)) {
            fieldDictionary.set(field[0], 1)
        }
    } // hcl (Hair Color) - a '#' followed by exactly six characters 0-9 or a-f
    else if (field[0] == fields[4]) {
        const re = new RegExp(/#[0-9a-f]/g);
        if (field[1].length == 7 && field[1].match(re)) {
            fieldDictionary.set(field[0], 1)
        }
    } // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    else if (field[0] == fields[5]) {
        let eclDictionary = new Map([
            ['amb', 1],
            ['blu', 1],
            ['brn', 1], 
            ['gry', 1],
            ['grn', 1],
            ['hzl', 1],
            ['oth', 1]
          ]);

        if (eclDictionary.has(field[1])) {
            fieldDictionary.set(field[0], 1)
        }    
    } // pid (Passport ID) - a nine-digit number, including leading zeroes.
    else if (field[0] == fields[6]) {
        const re = new RegExp(/[0-9]/g);
        if (field[1].length == 9 && field[1].match(re)) {
            fieldDictionary.set(field[0], 1)
        }
    }
}

function numberWithinBounds(value: Number, minimum: Number, maximum: Number) {
    return (minimum <= value) && (value <= maximum)
}

console.log(numValid)