import path from "path";
export function parseFilePath(oldPath){
    return `\"${path.normalize(oldPath)}\"`;
}