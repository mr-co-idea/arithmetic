import { createMD } from './model'

// readme模板构建
// eg: ts-node md Hash 散列
const cmd: string[] = process.argv.splice(2);

createMD(cmd[0], cmd[1]);