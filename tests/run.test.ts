import { run, print } from "bluebun"
import { expect, test } from "bun:test"
import { testCLIOptions } from "./test-run-options"

test("bluebun version", async () => {
  print.setMocked(true)
  const argv = ["/bin/node", "/bin/bluebun", "version"]
  const options = testCLIOptions({ argv, path: __dirname + "/../cli" })
  await run(options)
  // read the version from package.json
  const pkg = await Bun.file(__dirname + "/../package.json").json()
  expect(pkg.version).toInclude(".") // should be a version number
  expect(print.testOutput).toContain(pkg.version)
  print.setMocked(false)
})

test("bluebun help", async () => {
  print.setMocked(true)
  const argv = ["/bin/node", "/bin/bluebun", "help"]
  const options = testCLIOptions({ argv, path: __dirname + "/../cli" })
  await run(options)
  expect(print.testOutput).toContain(`Commands:`)
  print.setMocked(false)
})