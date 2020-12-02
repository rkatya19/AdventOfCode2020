import { getInput, tick, tock } from '../common.ts';

let input = await getInput(2);
let rules = input.split('\n');

tick();
let numValid = 0;
for (let rule of rules) {
    rule = rule.replace(':', '').replace('-', ' ');
    let values = rule.split(' ');

    let matches = values[3].match(new RegExp(values[2], 'gm'));

    if (matches && matches.length >= Number(values[0]) && matches.length <= Number(values[1])) {
        numValid += 1
    }
}
console.error(tock());
console.log(numValid);