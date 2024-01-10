const os = require('node:os');
const { exec } = require('child_process');

const platform = os.platform();

const open = (url) => {
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
}

module.exports = { open }
