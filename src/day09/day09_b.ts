import { getInput, tick, tock } from '../common.ts';

const input = await getInput(9);
const numbers = new Int32Array(input.split('\n').map(n => parseInt(n)));
const target = 1398413738; // Answer from pt1

let done = false;
for (let i=0; i < numbers.length - 1; i++) {
    let sum = numbers[i];
    
    for (let j=i + 1; j < numbers.length; j++) {
        sum += numbers[j];

        if (sum > target) break;

        if (sum == target) {
            done = true;
            let sub = numbers.slice(i, j).sort();
            console.log(sub[0] + sub[sub.length - 1])
            break;
        }
    }

    if (done) break;
}