const { app, protocol, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    webPreferences: { nodeIntegration: true },
    width: 850,
    height: 720,
    minWidth: 850,
    minHeight: 720,
    title: "Huayra stopmotion"
  });

  const dirname = __dirname || path.resolve(path.dirname());
  process.chdir(dirname);

  const appLocation = `file://${__dirname}/index.html`;

  win.loadURL(appLocation);
  win.setMinimumSize(800, 600);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => app.quit());

app.on('activate', () => {
  if (win === null)
    createWindow();
});
