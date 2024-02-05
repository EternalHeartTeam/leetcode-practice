import os from "node:os";
import {exec} from "child_process";
const platform = os.platform();

/**
 * 打开浏览器
 * @param {string} url
 */
export const open = (url) => {
  switch (platform) {
    case 'darwin':
      exec(`open "${url}"`);
      break;
    case 'win32':
      exec(`start "${url}"`);
      break;
    case 'linux':
      exec(`xdg-open "${url}"`);
    default:
      console.log(`Unsupported platform: ${platform}`);
      break;
  }
};