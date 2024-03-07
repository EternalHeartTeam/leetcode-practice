import { readdirSync } from 'node:fs'

export function getFileListBySameName(dir, name) {
  return readdirSync(dir).filter(filename => filename.includes(name))
}
