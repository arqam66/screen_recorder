<p align="center">
  <h1 align="center">Arqam Recorder</h1>
  <p align="center">A free screen recorder with face cam overlay, voice recording, and instant local download.<br>No server, no upload, no account — everything runs locally in your browser.</p>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#download">Download</a> •
  <a href="#how-to-use">How to Use</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#license">License</a>
</p>

---

## Features

| Feature | Description |
|---|---|
| 🖥️ **Screen only** | Record any Chrome tab or window with microphone voice |
| 📷 **Camera only** | Record face cam with voice |
| 🎬 **Screen + Camera** | Face cam overlay on screen recording (Loom-style) |
| ⏱️ **Live timer** | MM:SS counter with pulsing record indicator |
| 🎚️ **Audio meter** | Real-time microphone level visualizer |
| 🎯 **Quality presets** | Ultra / High / Medium / Low (1–8 Mbps) |
| 📐 **Camera controls** | Adjustable position, shape (circle/rectangle), and size |
| 🔴 **Laser pointer** | Highlight areas on screen during recording |
| ✏️ **Pen annotation** | Draw directly on screen while recording |
| 📸 **Screenshot** | Capture a PNG still at any moment |
| 👁️ **Preview before download** | Watch your recording, then save or discard |
| ⌨️ **Keyboard shortcuts** | `Space` pause · `Esc` stop · `S` screenshot |
| 💾 **Local download** | Saved as `.webm` — no cloud, no upload, 100% private |

---

## Download

| Platform | Link |
|----------|------|
| 🪟 **Windows .exe** (installer) | [Latest Release →](https://github.com/arqam66/screen_recorder/releases/latest) |
| 🌐 **Chrome Extension** | [Download folder →](chrome-extension) — then Load unpacked |
| ⚡ **Web App** | Open in Chrome at the live demo URL |

### Installing the Windows App

1. Download the latest `Arqam-Recorder-Setup.exe` from [Releases](https://github.com/arqam66/screen_recorder/releases/latest)
2. Run the installer — it will create Desktop and Start Menu shortcuts
3. Launch **Arqam Recorder** from the shortcut

> **"Windows protected your PC" warning?** This appears because the executable is not code-signed. The app is 100% safe — all source code is public in this repository. Click **"More info"** → **"Run anyway"** to proceed.

### Installing the Chrome Extension

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked** and select the [`chrome-extension`](chrome-extension) folder
5. Pin the extension icon to your toolbar and click it to open the recorder

The extension opens a floating popup that persists across tabs — recording continues uninterrupted when you switch tabs.

---

## How to Use

### Screen Only

1. Select **Screen only** and click **Start**
2. In the Chrome share dialog, choose the **Chrome Tab** you want to record
3. Allow microphone access → a 3-second countdown appears → recording begins
4. Switch to your selected tab and work normally
5. Return to the recorder, click **Stop** → preview → download

### Camera Only

1. Select **Camera only** and click **Start**
2. Allow camera and microphone access → 3-second countdown → recording begins
3. Click **Stop** → preview → download

### Screen + Camera (Face Overlay)

1. Select **Screen + Camera** and click **Start**
2. In the Chrome share dialog, pick **a different tab** (not the recorder itself)
3. Allow camera and microphone access → 3-second countdown → recording begins
4. Switch to your selected tab and work — the recorder runs silently in the background
5. Return to the recorder, click **Stop** → preview → download one combined video

> **Note:** Always select **"Chrome Tab"** in the share dialog, not "Entire Screen". Choosing a tab other than the recorder prevents mirror loops.

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Pause / Resume recording |
| `Esc` | Stop recording |
| `S` | Take screenshot |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 / CSS3 / JavaScript | Zero-dependency frontend |
| `getDisplayMedia` | Screen capture API |
| `getUserMedia` | Camera and microphone access |
| `MediaRecorder` | Video encoding to `.webm` |
| `Canvas` + `requestAnimationFrame` | Real-time compositing of screen and camera overlay |
| `AudioContext` | Echo-free multi-source audio mixing |
| **Electron** | Cross-platform desktop application |
| **Chrome Extension MV3** | Browser extension packaging |

### Browser Support

| Browser | Compatibility |
|---------|:------------:|
| Google Chrome 88+ | ✅ Full support |
| Microsoft Edge 88+ | ✅ Full support |
| Mozilla Firefox | ⚠️ Partial support |
| Apple Safari | ❌ Not supported |

---

## Project Structure

```
arqam-recorder/
├── index.html                 # Web application (single self-contained file)
├── main.js                    # Electron main process
├── package.json               # Electron build configuration
├── assets/
│   └── icon.ico               # Application icon
├── chrome-extension/
│   ├── manifest.json          # Manifest V3
│   ├── background.js          # Service worker — opens recorder on click
│   ├── recorder.html          # Extension user interface
│   ├── recorder.js            # Extension recording logic
│   └── icons/                 # Extension icon assets
└── .github/workflows/
    └── build.yml              # CI — builds Windows .exe on tag push
```

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">Created by <a href="https://github.com/arqam66">Arqam Hussain</a></p>
