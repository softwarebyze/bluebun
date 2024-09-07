import * as jetpack from 'fs-jetpack'
import { FSJetpack } from 'fs-jetpack/types'

export interface BluebunFilesystem extends FSJetpack {}


export const filesystem = {
    // path: {},
    // dir: {},
    // copy: {},
    ...jetpack
}

// import { FSJetpack } from 'fs-jetpack/types'

// export interface GluegunFilesystem extends FSJetpack {
//   /**
//    * Convenience property for `os.EOL`.
//    */
//   eol: string

//   /**
//    * Convenience property for `path.sep`.
//    */
//   separator: string

//   /**
//    * Convenience property for `os.homedir` function
//    */
//   homedir: () => string

//   /**
//    * The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.
//    *
//    * Starting from leftmost {from} parameter, resolves {to} to an absolute path.
//    *
//    * If {to} isn't already absolute, {from} arguments are prepended in right to left order,
//    * until an absolute path is found. If after using all {from} paths still no absolute path is found,
//    * the current working directory is used as well. The resulting path is normalized,
//    * and trailing slashes are removed unless the path gets resolved to the root directory.
//    *
//    * @param pathSegments string paths to join.  Non-string arguments are ignored.
//    */
//   chmodSync: typeof import('fs').chmodSync

//   /**
//    * The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.
//    *
//    * Starting from leftmost {from} parameter, resolves {to} to an absolute path.
//    *
//    * If {to} isn't already absolute, {from} arguments are prepended in right to left order,
//    * until an absolute path is found. If after using all {from} paths still no absolute path is found,
//    * the current working directory is used as well. The resulting path is normalized,
//    * and trailing slashes are removed unless the path gets resolved to the root directory.
//    *
//    * @param pathSegments string paths to join.  Non-string arguments are ignored.
//    */
//   resolve: typeof import('path').resolve

//   /**
//    * Retrieves a list of subdirectories for a given path.
//    */
//   subdirectories(path: string, isRelative?: boolean, matching?: string): string[]

//   /**
//    * Is this a file?
//    */
//   isFile(path: string): boolean

//   /**
//    * Is this not a file?
//    */
//   isNotFile(path: string): boolean

//   /**
//    * Is this a directory?
//    */
//   isDirectory(path: string): boolean

//   /**
//    * Is this not a directory?
//    */
//   isNotDirectory(path: string): boolean
// }

// // from https://github.com/Microsoft/TypeScript/blob/master/src/lib/dom.generated.d.ts#L12209-L12223
// // added manually so we don't have to import typescript's dom typings
// export interface URL {
//   hash: string
//   host: string
//   hostname: string
//   href: string
//   readonly origin: string
//   password: string
//   pathname: string
//   port: string
//   protocol: string
//   search: string
//   username: string
//   readonly searchParams: any
//   toString(): string
// }

// import * as os from 'os'
// import * as pathlib from 'path'
// import * as jetpack from 'fs-jetpack'
// import { chmodSync } from 'fs'

// import { GluegunFilesystem } from './filesystem-types'

// /**
//  * Is this a file?
//  *
//  * @param path The filename to check.
//  * @returns `true` if the file exists and is a file, otherwise `false`.
//  */
// function isFile(path: string): boolean {
//   return jetpack.exists(path) === 'file'
// }

// /**
//  * Is this not a file?
//  *
//  * @param path The filename to check
//  * @return `true` if the file doesn't exist.
//  */
// const isNotFile = (path: string): boolean => !isFile(path)

// /**
//  * Is this a directory?
//  *
//  * @param path The directory to check.
//  * @returns True/false -- does the directory exist?
//  */
// function isDirectory(path: string): boolean {
//   return jetpack.exists(path) === 'dir'
// }

// /**
//  * Is this not a directory?
//  *
//  * @param path The directory to check.
//  * @return `true` if the directory does not exist, otherwise false.
//  */
// const isNotDirectory = (path: string): boolean => !isDirectory(path)

// /**
//  * Gets the immediate subdirectories.
//  *
//  * @param path Path to a directory to check.
//  * @param isRelative Return back the relative directory?
//  * @param matching   A jetpack matching filter
//  * @return A list of directories
//  */
// function subdirectories(path: string, isRelative = false, matching = '*', _symlinks = false): string[] {
//   const { strings } = require('./string-tools')
//   if (strings.isBlank(path) || !isDirectory(path)) return []

//   const dirs = jetpack.cwd(path).find({
//     matching,
//     directories: true,
//     recursive: false,
//     files: false,
//   })
//   if (isRelative) {
//     return dirs
//   } else {
//     return dirs.map((dir) => pathlib.join(path, dir))
//   }
// }

// const filesystem: GluegunFilesystem = {
//   chmodSync,
//   eol: os.EOL, // end of line marker
//   homedir: os.homedir, // get home directory
//   separator: pathlib.sep, // path separator
//   subdirectories, // retrieve subdirectories
//   isFile,
//   isNotFile,
//   isDirectory,
//   isNotDirectory,
//   resolve: pathlib.resolve,
//   // and everything else in jetpack
//   ...jetpack,
// }

// export { filesystem, GluegunFilesystem }