import path from 'node:path'
import fs, { mkdirSync } from 'node:fs'
import esbuild from 'esbuild'
import { rootPath } from '#common/utils/file/getRootPath.js'

// 读取 package.json 文件内容
const packageJson = JSON.parse(
  fs.readFileSync(path.resolve(rootPath, 'package.json'), 'utf-8'),
)
const esbuildConfig = {
  entryPoints: ['bin/lk.js', 'bin/lf.js', 'bin/lc.js'],
  outdir: 'pl-cli/bin',
  platform: 'node',
  target: ['node20'],
  format: 'esm',
  bundle: true,
  minify: true,
  packages: 'external',
  define: {
    'process.env.VERSION': JSON.stringify(packageJson.version),
  },
}
const buildBinConfig = {
  lk: 'bin/lk.js',
  lf: 'bin/lf.js',
  lc: 'bin/lc.js',
}
const publishExcludeFields = [
  'scripts',
  'devDependencies',
  'imports',
  'main',
  'config',
  'packageManager',
]
// 清理文件
function clean() {
  return new Promise((resolve, reject) => {
    fs.rm(path.resolve(rootPath, 'pl-cli'), { recursive: true }, (err) => {
      if (err)
        resolve()
      else
        resolve()
    })
  })
}

/**
 * 创建入口文件 暴露三个接口
 */
function createIndex() {
  const dirs = buildBinConfig
  const expTem = `export * from `

  const content = Object.values(dirs).reduce((p, file) => {
    return `${p + expTem}'${file}'\n`
  }, '')
  const filePath = 'pl-cli/index.js'
  fs.writeFileSync(filePath, content)
}

/**
 * 复制文档
 */
function copyDocs() {
  // 复制文件
  const docs = fs.readdirSync(path.resolve(rootPath, 'docs'))
  // 创建docs
  mkdirSync(path.resolve(rootPath, 'pl-cli/docs'), { recursive: true })
  docs.forEach((doc) => {
    fs.copyFileSync(
      path.resolve(rootPath, 'docs', doc),
      path.resolve(rootPath, 'pl-cli/docs/', doc),
    )
  })
  fs.copyFileSync(
    path.resolve(rootPath, 'README.md'),
    path.resolve(rootPath, 'pl-cli/README.md'),
  )
  fs.copyFileSync(
    path.resolve(rootPath, 'LICENSE'),
    path.resolve(rootPath, 'pl-cli/LICENSE'),
  )
}

/**
 * 重写包文件
 */
function rewritePackageFile() {
  const newPackageJson = Object.assign(packageJson, {
    bin: buildBinConfig,
  })
  publishExcludeFields?.forEach((key) => {
    delete newPackageJson[key]
  })
  Object.assign(newPackageJson, { main: 'index.js' })
  fs.writeFileSync(
    path.resolve(rootPath, 'pl-cli/package.json'),
    JSON.stringify(newPackageJson),
  )
}

/**
 * 构建完成之后的流程
 */
function afterBuild() {
  copyDocs()
  rewritePackageFile()
  createIndex()
}

/**
 * 主进程
 */
async function main() {
  await clean()
  await esbuild
    .build(esbuildConfig)
    .then(() => {
      // 构建完成后执行的操作
      afterBuild()
      console.log('[LP]脚本打包完成,查看目录[pl-cli].')
    })
    .catch((e) => {
      console.error('[LP]脚本打包失败', e)
      process.exit(1)
    })
}
await main()
