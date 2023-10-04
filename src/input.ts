import { specialKeys } from "./special-keys"

type InputKeyFunction = {
  (): Promise<string>
  mock?: () => Promise<string> | string
}

export const inputKey: InputKeyFunction = async () => {
  if (inputKey.mock) return inputKey.mock()

  // wait for user input (1 key, including arrow keys)
  const key = (await new Promise((resolve) => {
    process.stdin.setRawMode(true)
    process.stdin.resume()
    process.stdin.once("data", (data) => {
      process.stdin.setRawMode(false)
      process.stdin.pause()
      resolve(data.toString())
    })
  })) as string

  // if it's a special key, return the name
  const keySp = key as keyof typeof specialKeys

  const specialKey = specialKeys[keySp]

  // if it's ctrl-c, process.exit
  if (specialKey === "ctrl-c") process.exit(1)

  if (specialKey) return specialKeys[keySp]

  // otherwise return the string
  return key
}

type InputKeysFunction = {
  (onKey: (key: string) => Promise<void | false> | void | false): Promise<void>
  mock?: (onKey: (key: string) => Promise<void | false> | void | false) => Promise<void>
}

export const inputKeys: InputKeysFunction = async (onKey) => {
  if (inputKeys.mock) return inputKeys.mock(onKey)

  while (true) {
    const key = await inputKey()
    if (key === "ctrl-c") break
    const result = await onKey(key)
    if (result === false) break
  }
}
