import { shell } from "@onivoro/server-common";


export function trimStart(input: string, start: any, output: string) {
    shell(`ffmpeg -ss ${start} -i ${input} ${output}`);
}

