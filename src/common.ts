import { exists } from "https://deno.land/std@0.79.0/fs/mod.ts";

const SESSION_ID = '';
let timer = 0;

export async function getInput(day: number): Promise<string> {
    const dayStr = day.toString().padStart(2, '0');
    const filePath = `./src/day${dayStr}/day${dayStr}_input.txt`;
    let data: string;

    if (await exists(filePath)) {
        data = await Deno.readTextFile(filePath);
    } else {
        let response = await fetch(`https://adventofcode.com/2020/day/${day}/input`, {
            headers: {
                'Cookie': `session=${SESSION_ID}`,
            },
        });

        if (response.status == 200) {
            data = await response.text();
            Deno.writeTextFile(filePath, data);
        } else {
            throw `Get input for day ${day} failed: ${response.statusText}`;
        }
    }
    return data.trim();
}

export function tick() {
    timer = performance.now();
}

export function tock() {
    let elapsed = round(performance.now() - timer, 4);
    return `\x1b[38;2;0;0;255m${elapsed} ms\x1b[0m`
}

function round(num: number, decimalPlaces: number = 0) {
    var p = Math.pow(10, decimalPlaces);
    var m = (num * p) * (1 + Number.EPSILON);
    return Math.round(m) / p;
}