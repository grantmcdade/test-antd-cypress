import debug from 'debug'

export function createDebug(namespace: string) {
  const obj = debug(`a4t:${namespace}`)
  obj.log = console.log.bind(console)
  return obj
}
