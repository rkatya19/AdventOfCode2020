import { getInput } from '../common.ts';

let input = await getInput(1);

let values = input.split('\n');

let map: Map<number, number> = new Map();
for (let value of values) {
    let val = Number(value);
    let remain = 2020 - val;

    if (map.has(remain)) {
        console.log(val * remain, val, remain);
        break;
    } else {
        map.set(val, remain);
    }
}