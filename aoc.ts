import { exists } from "https://deno.land/std@0.79.0/fs/mod.ts";
import { parse } from "https://deno.land/std@0.79.0/flags/mod.ts";

let args = parse(Deno.args);

if (args._.length < 1) {
    throw 'Must pass at least 1 day to run!';
}

for (let day of args._) {
    let rootPath = `./src/${day}/`;
    if (await exists(rootPath + `${day}_a.ts`)) {
        console.log(`Running ${day} A:`);
        await runFile(rootPath + `${day}_a.ts`);
    }

    if (await exists(rootPath + `${day}_b.ts`)) {
        console.log(`Running ${day} B:`);
        await runFile(rootPath + `${day}_b.ts`);
    }
}

async function runFile(path: string) {
    let p = Deno.run({
        cmd: ['deno', 'run', '--allow-all', '--unstable', path],
        stdout: 'piped',
        stderr: 'piped'
    });
    const { code } = await p.status();

    if (code === 0) {
        const rawOutput = await p.output();
        await Deno.stdout.write(rawOutput);
    } else {
        const rawError = await p.stderrOutput();
        const errorString = new TextDecoder().decode(rawError);
        console.log(errorString);
    }
}