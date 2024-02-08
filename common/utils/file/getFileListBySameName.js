import {readdirSync} from "fs";

export function getFileListBySameName(dir, name) {
    return readdirSync(dir).filter((filename) => filename.includes(name));
}