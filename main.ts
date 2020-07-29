import { app, BrowserWindow, globalShortcut, screen } from 'electron';
import * as os from 'os';
import * as url from 'url';
import * as path from 'path';

let win: BrowserWindow;

async function createWindow() {
  const display = screen.getPrimaryDisplay();

  // Create the browser window.
  const width = 1278;
  const height = 726;

  const scale = os.platform() !== 'darwin' && os.platform() !== 'win32' ? display.scaleFactor : 1;

  win = new BrowserWindow({
    width: Math.ceil(width / scale),
    height: Math.ceil(height / scale),
    minWidth: Math.ceil(width / scale),
    minHeight: Math.ceil(height / scale),
    fullscreen: false,
    title: 'App',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInSubFrames: true,
      nodeIntegrationInWorker: true,
      webviewTag: true,
    },
  });

  // Launch
  const srcApplication = url.format({
    pathname: path.join(__dirname, 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true,
  });
  win.webContents.openDevTools();
  win.loadURL(srcApplication);
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', () => {
    createWindow();
  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    app.quit();
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

  app.once('quit', () => {
  });

} catch (e) {
  // Catch Error
  // throw e;
}
