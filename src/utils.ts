/**
 * These are small utility functions that we also make available to the
 * CLI developer.
 */

import { type CommandTree } from "blowgun"

/**
 * Returns largest string in an array. Useful for aligning text.
 */
export function largest(arr: string[]) {
  return arr.reduce((acc, str) => (str.length > acc.length ? str : acc), "")
}

/**
 * Recursively crawls a command tree and returns the longest command name.
 * Useful for aligning text in a help message.
 */
export function calcWidestCommandName(cmdTree: CommandTree, start: number = 10): number {
  return Object.keys(cmdTree).reduce((acc, key) => {
    const { name, subcommands } = cmdTree[key]
    const nameLength = stripANSI(name).length
    const subcommandsWidest = subcommands ? calcWidestCommandName(subcommands, acc + 1 + nameLength) : 0
    return Math.max(acc, nameLength, subcommandsWidest)
  }, start)
}

/**
 * Strips ansi codes from a string.
 * Useful for testing.
 */
export function stripANSI(str: string): string {
  return str.replace(/\u001B\[\d+m/g, "")
}

/**
 * Async delay x milliseconds.
 */
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}