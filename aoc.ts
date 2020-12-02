import { exists } from "https://deno.land/std@0.79.0/fs/mod.ts";
import { parse } from "https://deno.land/std@0.79.0/flags/mod.ts";

let args = parse(Deno.args, { boolean: true });

if (args._.length < 1) {
    for (let i = 1; i <= 25; i++) {
        args._.push(`day${i.toString().padStart(2, '0')}`);
    }
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
        cmd: ['deno', 'run', '-A', '--unstable', path],
        stdout: 'piped',
        stderr: 'piped'
    });

    const outBuff = new Uint8Array(1024);
    while (await p.stdout.read(outBuff)) {
        await Deno.stdout.write(outBuff);
    }

    const { code } = await p.status();
    if (code === 0) {
        const rawError = await p.stderrOutput();
        await Deno.stdout.write(rawError);
    } else {
        const rawError = await p.stderrOutput();
        const errorString = new TextDecoder().decode(rawError);
        console.log(errorString);
    }
}