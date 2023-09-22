import { Toolbox } from "blowgun"

export default {
  name: "version",
  description: "Prints the CLI version",
  run: async (toolbox: Toolbox) => {
    toolbox.runOptions.print(toolbox.runOptions.package.version)
  },
}
