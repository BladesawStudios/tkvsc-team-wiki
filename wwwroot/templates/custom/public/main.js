export default {
    defaultTheme: 'dark',
    start: () => {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-bs-theme', 'dark');

        const downloadButton = document.getElementById('download-detected');
        if (!downloadButton) {
            return;
        }

        const downloads = {
            windows: {
                href: 'https://downloads.tkvsc.dev/tkvsc/latest/win',
                label: 'Download for Windows'
            },
            linux: {
                href: 'https://downloads.tkvsc.dev/tkvsc/latest/linux',
                label: 'Download for Linux'
            },
            'mac-x64': {
                href: 'https://downloads.tkvsc.dev/tkvsc/latest/mac/x86',
                label: 'Download for macOS (Intel)'
            },
            'mac-arm64': {
                href: 'https://downloads.tkvsc.dev/tkvsc/latest/mac/arm',
                label: 'Download for macOS (Apple Silicon)'
            }
        };

        const platform = navigator.userAgentData?.platform || navigator.platform || navigator.userAgent;
        let downloadKey;

        if (/win/i.test(platform)) {
            downloadKey = 'windows';
        } else if (/linux/i.test(platform)) {
            downloadKey = 'linux';
        } else if (/mac/i.test(platform)) {
            downloadKey = 'mac-x64';

            if (navigator.userAgentData?.getHighEntropyValues) {
                navigator.userAgentData.getHighEntropyValues(['architecture'])
                    .then(({ architecture }) => {
                        if (/arm/i.test(architecture)) {
                            downloadKey = 'mac-arm64';
                            downloadButton.href = downloads[downloadKey].href;
                            downloadButton.textContent = downloads[downloadKey].label;
                        }
                    })
                    .catch(() => {
                        // Keep the Intel macOS link when architecture detection is unavailable.
                    });
            } else if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
                downloadKey = 'mac-arm64';
            }
        }

        if (downloadKey) {
            downloadButton.href = downloads[downloadKey].href;
            downloadButton.textContent = downloads[downloadKey].label;
        }
    },
    iconLinks: [
        {
            icon: 'github',
            href: 'https://github.com/TKVSC-Team/totk-vscode',
            title: 'GitHub'
        },
        {
            icon: 'discord',
            href: 'https://discord.gg/vwPnX2uB8s',
            title: 'Discord'
        },
        {
            icon: 'patreon',
            href: 'https://www.patreon.com/tkvsc',
            title: 'Patreon'
        }
    ]
}
