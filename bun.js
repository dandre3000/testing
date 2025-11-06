/** Retrieve caller test file. https://github.com/oven-sh/bun/issues/11660#issuecomment-2506832106 */
const caller = () => {
    const Trace = Error
    const _ = Trace.prepareStackTrace
    Trace.prepareStackTrace = (_, stack) => stack
    const { stack } = new Error()
    Trace.prepareStackTrace = _
    const caller = stack[2]
    return caller.getFileName().replaceAll("\\", "/")
}

export const test = (name, fn) => {
    name = String(name)

    if (typeof fn !== 'function') throw new TypeError(`fn (${typeof fn}) is not a function`)

    // bunTest(name, fn)
    return Bun.jest(caller()).test(name, fn)
}

export * as assertLib from '@std/assert'
export { expect, fn } from '@std/expect'
export { describe, it } from 'cross-bdd'