import { exists } from "https://deno.land/std@0.79.0/fs/mod.ts";

const SESSION_ID = '';

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
