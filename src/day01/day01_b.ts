import { getInput, tick, tock } from '../common.ts';

let input = await getInput(1);
let values = input.split('\n');

tick();
let map: Map<number, number> = new Map();
for (let i=0; i < values.length; i++) {
    let v1 = Number(values[i]);

    let breakFlag = false;
    for (let j=i+1; j < values.length; j++) {
        let v2 = Number(values[j]);

        let remain = 2020 - (v1 + v2);

        if (map.has(remain)) {
            console.log(v1 * v2 * remain, tock());
            breakFlag = true;
            break;
        }
    }

    if (breakFlag) {
        break;
    }

    map.set(v1, v1);
}
