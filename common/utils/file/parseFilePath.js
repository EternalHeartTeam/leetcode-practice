import path from 'node:path'

export function parseFilePath(oldPath) {
  return `\"${path.normalize(oldPath)}\"`
}
