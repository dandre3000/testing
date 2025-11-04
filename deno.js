export const test = (name, fn) => {
    name = String(name)

    if (typeof fn !== 'function') throw new TypeError(`fn (${typeof fn}) is not a function`)

    Deno.test(name, fn)
}

export * as stdAssert from './std.js'
export { expect, fn } from './std.js'
export { describe, it } from 'cross-bdd'