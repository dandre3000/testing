#!/usr/bin/env node

import { exec } from 'node:child_process'

const [, , runtime, ...paths] = process.argv

if (!runtime) {
    console.error('Usage: node run-tests.js [node|bun|deno]')
    process.exit(1)
}

paths.forEach((path, i, paths) => {
    if (path[0] === '-') paths[i] = './' + path
})

let command

switch (runtime) {
    case 'node':
        command = `node --test ${paths.join(' ')}`
        break
    case 'bun':
        command = `bun test ${paths.join(' ')}`
        break
    case 'deno':
        command = `deno test ${paths.join(' ')}`
        break
    default:
        console.error(`Unknown runtime: ${runtime}`)
        console.error('Please use one of: node, bun, deno')
        process.exit(1)
}

console.log(`Running tests with ${runtime}...`)

exec(command, (error, stdout, stderr) => {
/*     if (error) {
        console.error(`Error running tests: ${error.message}`)
        process.exit(1)
    } */
    if (stderr) {
        console.error(stderr)
    }
    console.log(stdout)
})
