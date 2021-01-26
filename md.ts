import { createMD } from './model'

const cmd: string[] = process.argv.splice(2);

createMD(cmd[0], cmd[1]);