import { getInput, tick, tock } from '../common.ts';

let input = await getInput(1);
let values = input.split('\n').map(v => Number(v));

tick();
let map: Map<number, number> = new Map();
for (let value of values) {
    let remain = 2020 - value;

    if (map.has(remain)) {
        console.error(tock());
        console.log(value * remain);
        break;
    } else {
        map.set(value, remain);
    }
}