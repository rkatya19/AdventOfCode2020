import { getInput, tick, tock } from '../common.ts';

let input = await getInput(2);
let rules = input.split('\n');

tick();
let numValid = 0;
for (let rule of rules) {
    rule = rule.replace(':', '').replace('-', ' ');
    let values = rule.split(' ');

    const idx1 = Number(values[0]);
    const idx2 = Number(values[1]);

    const cond1 = values[3][idx1 - 1] == values[2];
    const cond2 = values[3][idx2 - 1] == values[2]
    if ((cond1 || cond2) && !(cond1 && cond2)) {
        numValid += 1;
    }
}
console.error(tock());
console.log(numValid);