---
title: Download TKVSC
description: Downloads page for TKVSC.
---

# Download TKVSC

TKVSC is distributed as a `.vsix` extension package for Visual Studio Code.

<div id="download-btns">
  <a class="download-btn" id="download-detected" href="https://github.com/TKVSC-Team/totk-vscode/releases/latest">Download for your OS</a>
  <a class="download-btn" id="download-src" href="https://github.com/TKVSC-Team/totk-vscode">Source Code</a>
  <a class="download-btn" id="download-addon" href="https://tkvsc.dev/addons/index.html">Addons</a>
</div>
<br>

<div id="platform-downloads">
  <h2>All downloads</h2>
  <ul>
    <li><a data-download-platform="windows" href="https://downloads.tkvsc.dev/tkvsc/latest/win">Windows</a></li>
    <li><a data-download-platform="linux" href="https://downloads.tkvsc.dev/tkvsc/latest/linux">Linux</a></li>
    <li><a data-download-platform="mac-x64" href="https://downloads.tkvsc.dev/tkvsc/latest/mac/x86">macOS (Intel)</a></li>
    <li><a data-download-platform="mac-arm64" href="https://downloads.tkvsc.dev/tkvsc/latest/mac/arm">macOS (Apple Silicon)</a></li>
  </ul>
</div>

<script>
  (() => {
    const downloads = {
      windows: ['https://downloads.tkvsc.dev/tkvsc/latest/win', 'Download for Windows'],
      linux: ['https://downloads.tkvsc.dev/tkvsc/latest/linux', 'Download for Linux'],
      macX64: ['https://downloads.tkvsc.dev/tkvsc/latest/mac/x86', 'Download for macOS (Intel)'],
      macArm64: ['https://downloads.tkvsc.dev/tkvsc/latest/mac/arm', 'Download for macOS (Apple Silicon)']
    };
    const button = document.getElementById('download-detected');
    const platform = navigator.userAgentData?.platform || navigator.platform || navigator.userAgent;
    let download = /win/i.test(platform) ? downloads.windows : /linux/i.test(platform) ? downloads.linux : /mac/i.test(platform) ? downloads.macX64 : null;

    if (/mac/i.test(platform) && navigator.userAgentData?.getHighEntropyValues) {
      navigator.userAgentData.getHighEntropyValues(['architecture']).then(({ architecture }) => {
        if (/arm/i.test(architecture)) {
          download = downloads.macArm64;
          button.href = download[0];
          button.textContent = download[1];
        }
      });
    } else if (/mac/i.test(platform) && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
      download = downloads.macArm64;
    }

    if (download) {
      button.href = download[0];
      button.textContent = download[1];
    }
  })();
</script>

## Requirements

- [Visual Studio Code](https://code.visualstudio.com/) 1.125.0 or newer
- [Python 3.13+](https://www.python.org/downloads/)
- [Microsoft C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) (Windows)
- A valid TotK romfs dump

## Installation

1. Download the latest `.vsix` from [GitHub Releases](https://github.com/TKVSC-Team/totk-vscode/releases/latest).
2. In VS Code, open the Command Palette and run **Extensions: Install from VSIX...**
3. Select the downloaded file and follow the first-time setup prompts.

### Addon Installation

1. Ensure you have at least TKVSC `0.0.3-beta.1` installed.
2. Download the `.vsix` for the addon you'd like to install from [Addon Releases](https://github.com/TKVSC-Team/tkvsc-addons/releases/latest).
3. In VS Code, open the Command Palette and run **Extensions: Install from VSIX...**
4. Select the downloaded file and follow the first-time setup prompts.

Documentation for setup and usage will be expanded here soon.
