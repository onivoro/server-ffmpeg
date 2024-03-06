import { shell } from "@onivoro/server-common";

export function convert(inputFileAndExtension: string, outputFileAndExtension: string) {
    shell(`ffmpeg -i ${outputFileAndExtension} ${outputFileAndExtension}`);
}