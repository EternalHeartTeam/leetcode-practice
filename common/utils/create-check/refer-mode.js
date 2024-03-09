// 推测模式
export function referMode(args, opts) {
  if (args.length > 0 || opts.identity)
    return 'identity'

  if (opts.random)
    return 'random'

  return 'today'
}
