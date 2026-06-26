const { app, BrowserWindow, Menu, shell, desktopCapturer } = require('electron');
const path = require('path');

app.commandLine.appendSwitch('enable-features', 'WebRTC-H264WithOpenH264FFmpeg');
// Required for WASAPI system-audio loopback capture on Windows 10/11
app.commandLine.appendSwitch('enable-usermedia-screen-capturing');
app.commandLine.appendSwitch('auto-accept-camera-and-microphone-capture');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1150,
    height: 860,
    minWidth: 720,
    minHeight: 620,
    title: 'Screen Recorder',
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
    },
    backgroundColor: '#080b12',
    show: false,
  });

  // Grant all required media permissions automatically
  win.webContents.session.setPermissionCheckHandler((webContents, permission) => {
    const allowed = ['media', 'display-capture', 'mediaKeySystem', 'microphone', 'camera', 'audioCapture'];
    return allowed.includes(permission);
  });

  win.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
    const allowed = ['media', 'display-capture', 'mediaKeySystem', 'geolocation', 'microphone', 'camera', 'audioCapture'];
    callback(allowed.includes(permission));
  });

  // Handle getDisplayMedia — provide a real DesktopCapturerSource.
  // 'audio: loopback' enables WASAPI system-audio loopback on Windows (Electron 28+).
  // The renderer controls whether system audio is actually used via getUserMedia constraints.
  win.webContents.session.setDisplayMediaRequestHandler(async (request, callback) => {
    const sources = await desktopCapturer.getSources({ types: ['screen', 'window'] });
    const primary = sources.find(s => /screen|display/i.test(s.name)) || sources[0];
    if (primary) {
      // Pass 'loopback' for system audio on Windows; harmless on other platforms
      callback({ video: primary, audio: 'loopback' });
    } else {
      callback({});
    }
  });

  win.loadFile('index.html');

  // Show window once fully loaded (no white flash)
  win.once('ready-to-show', () => win.show());

  // Open external links in the default browser
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

// Remove default menu bar
Menu.setApplicationMenu(null);

app.whenReady().then(createWindow);

app.on('window-all-closed', () => app.quit());

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
