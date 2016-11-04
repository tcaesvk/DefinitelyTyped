/// <reference path="./fluent-ffmpeg.d.ts" />

import { Ffmpeg } from "fluent-ffmpeg";

let source: string, format: string, output: string

Ffmpeg({ source: source }).format(format).save(output)
