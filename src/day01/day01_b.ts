import { getInput, tick, tock } from '../common.ts';

let input = await getInput(1);
let values = input.split('\n').map(v => Number(v));

tick();
let map = new Uint16Array(2020);
for (let i=0; i < values.length; i++) {
    let v1 = values[i];

    let breakFlag = false;
    for (let j=i+1; j < values.length; j++) {
        let v2 = values[j];

        let remain = 2020 - (v1 + v2);

        if (map[remain - 1]) {
            console.error(tock());
            console.log(v1 * v2 * remain);
            breakFlag = true;
            break;
        }
    }

    if (breakFlag) {
        break;
    }

    map[v1 - 1] = 1;
}
