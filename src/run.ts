import { InitialRunOptions, RunOptions, runCommand, print } from "blowgun"

/**
 * This is the main entry point to your CLI and takes the initial run options
 * (which are all optional) and adds defaults, and then
 * calls runCommand with all options defined.
 */
export async function run(runOptions: InitialRunOptions) {
  // We add defaults to the object WITHOUT spreading to preserve the original reference
  runOptions.argv ||= process.argv
  runOptions.path ||= process.cwd()
  runOptions.package ||= {}
  runOptions.defaultCommand ||= async (toolbox) => {
    print(`command not found: ${toolbox.parameters?.fullpath.join(" ")}`)
  }

  const options = runOptions as RunOptions

  return runCommand(options)
}