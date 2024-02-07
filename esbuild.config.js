import esbuild from "esbuild";
import path from "path";
import fs from "fs";
import {rootPath} from "#common/utils/file/getRootPath.js";
// 读取 package.json 文件内容
const packageJson = JSON.parse(fs.readFileSync(path.resolve(rootPath, 'package.json'), 'utf-8'));
const publishFields = [
    "name",
    "version",
    "description",
    "author",
    "license",
    "publishConfig"
];
fs.unlink(path.resolve(rootPath, 'pl-cli'),(err)=>{
    if(err)return;
    console.log("清理pl-cli成功")
})
await esbuild.build({
    entryPoints: [
        'bin/lk.js',
        'bin/lf.js',
        'bin/lc.js'
    ],
    outdir: 'pl-cli/.bin',
    platform: 'node',
    target: ['node20'],
    format: 'esm',
    bundle: true,
    minify: true,
    external: ["fs", "path", "process", "child_process", "commander", "realm", "v8", "vm", "os", "url"],
    define: {
        'process.env.VERSION': JSON.stringify(packageJson.version)
    }
}).then(() => {
    // 构建完成后执行的操作
    // 复制文件
    fs.copyFileSync(path.resolve(rootPath, 'Readme.md'), path.resolve(rootPath, 'pl-cli/Readme.md'));
    const newPackageJson = publishFields?.reduce((acc,key)=>Object.assign(acc,{[key]:packageJson[key]}),{});
    fs.writeFileSync(path.resolve(rootPath, 'pl-cli/package.json'),JSON.stringify(newPackageJson));
    console.log("[LP]脚本打包完成,查看目录[pl-cli].")
}).catch((e) => {
    console.error("[LP]脚本打包失败", e);
    process.exit(1);
});