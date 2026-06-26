# Arqam Recorder

A browser-based screen recorder with face cam overlay, voice recording, and instant local download. No server, no upload, no account — everything runs locally.

---

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Downloads](#downloads)
- [Project Structure](#project-structure)
- [Browser Support](#browser-support)
- [Tech Stack](#tech-stack)
- [License](#license)

---

## Features

| Category | Details |
|----------|---------|
| **Recording modes** | Screen only, Camera only, Screen + Camera with face overlay |
| **Video quality** | Ultra (8 Mbps), High (4 Mbps), Medium (2 Mbps), Low (1 Mbps) |
| **Camera controls** | Position (4 corners), Shape (circle / rectangle), Size (slider) |
| **Audio** | Microphone toggle, real-time audio level meter, echo-free mixing |
| **Annotation** | Laser pointer, pen drawing, color picker, clear canvas |
| **Screenshot** | Capture PNG still frame during recording |
| **Preview** | Watch recording before saving, then download or discard |
| **Shortcuts** | `Space` pause/resume, `Esc` stop, `S` screenshot |
| **Output** | WebM format, optional MP4 (browser-dependent) |

---

## Usage

### Screen Only

1. Select **Screen only** → click **▶ Start**
2. In the share dialog, choose a **Chrome Tab** to record
3. Allow microphone access → 3-second countdown → recording begins
4. Switch to the selected tab and work normally
5. Return and click **⏹ Stop** → preview → save as WebM or MP4

### Camera Only

1. Select **Camera only** → click **▶ Start**
2. Allow camera and microphone access → 3-second countdown → recording begins
3. Click **⏹ Stop** → preview → download

### Screen + Camera

1. Select **Screen + Camera** → click **▶ Start**
2. Pick a **Chrome Tab** (different from the recorder tab)
3. Allow camera and microphone access → 3-second countdown → recording begins
4. Switch to your tab and work — the recorder runs in the background
5. Return and click **⏹ Stop** → preview → download one combined video

> **Note:** Always choose **"Chrome Tab"** in the share dialog. Picking a tab other than the recorder prevents mirror loops.

---

## Downloads

| Platform | Description |
|----------|-------------|
| **Windows App** | Electron-based desktop app with installer. Download from the Releases page. |
| **Chrome Extension** | Manifest V3 extension. Load `chrome-extension/` as an unpacked extension in Developer mode. |
| **Web App** | Open directly in Google Chrome or Microsoft Edge. No installation required. |

---

## Project Structure

```
arqam-recorder/
├── index.html                          # Main application (single HTML file)
├── main.js                             # Electron main process
├── package.json                        # Dependencies and build configuration
├── assets/
│   └── icon.ico                        # Application icon
├── chrome-extension/
│   ├── manifest.json                   # Extension manifest (MV3)
│   ├── background.js                   # Service worker
│   ├── recorder.html                   # Extension UI
│   ├── recorder.js                     # Extension recording logic
│   └── icons/                          # Extension icon assets
└── .github/workflows/
    └── build.yml                       # CI pipeline for Windows builds
```

---

## Browser Support

| Browser | Compatibility |
|---------|:------------:|
| Google Chrome 88+ | Full |
| Microsoft Edge 88+ | Full |
| Mozilla Firefox | Partial |
| Apple Safari | Not supported |

---

## Tech Stack

| Technology | Role |
|------------|------|
| HTML5 / CSS3 / JavaScript | Frontend (zero external dependencies) |
| `getDisplayMedia` | Screen capture |
| `getUserMedia` | Camera and microphone access |
| `MediaRecorder` | Video encoding to WebM/MP4 |
| `Canvas` + `requestAnimationFrame` | Real-time compositing of screen and camera overlay |
| `AudioContext` | Multi-source audio mixing |
| Electron | Desktop application packaging |
| Chrome Extension MV3 | Browser extension framework |

---

## License

Distributed under the MIT License.
