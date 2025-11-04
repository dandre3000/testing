declare module '@dandre3000/testing' {
    /**
     * Call the test runner of the current environment with the given arguments.
     * @param name The name of the test
     * @param fn The function to run for the test
     */
    export const test: (name: any, fn: Function) => void
    export * as assertLib from '@std/assert'
    export { expect, fn } from '@std/expect'
    export { describe, it } from 'cross-bdd'
}