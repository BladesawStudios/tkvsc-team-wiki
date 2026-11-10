# Making Your First Mod - Simple Sound Edit

Thie guide walks you through the process of creating a basic audio-replacement mod for a modern Nintendo game. In this guide, we will be working with the Ocarina of Time remake for Switch 2 (OOTNS2), however the steps are identical to performing the same edit in Tears of the Kingdom (TOTK). Thie tutorial walks through how the [Japanese VA Navi Callouts](https://gamebanana.com/mods/737343) mod was made.

## Requirements

1. Legally acquired [RomFS dump](https://tkvsc.dev/docs/game-dump-guide/index.html) of TOTK
    * If creating a mod for another game, you instead need that game's RomFS dump instead of TOTK's
2. [Visual Studio Code](https://code.visualstudio.com/download) (VS Code)
3. [TKVSC](https://tkvsc.dev/docs/setup-guide/index.html)

## Steps
### 0. Backgound Information
For most replacement cases, there are 2 filetypes that will be edited: `.bars` and `.bwav`. `.bars` files are typically found in `romfs\Sound\Resource`, and `.bwav` files are typically found in `romfs\Sound\Resource\Stream`.`.bwav` files contain actual audio and loop points. `.bars` contain collections of audio files, sometimes full audio files and sometimes "prefetch" forms of audio found elsewhere in the game dump. These prefetch audio files contain the first ~1 second of an audio file, which loads into memory faster than the full audio file. Whenever an audio file is called upon, the entire `.bars` file for that audio file is loaded, along with the specific full `.bwav`. On occasion for particularly short sounds, an audio file may exist fully in the `.bars` file and not have a loose `.bwav` associated with it. A well-made edit to any audio file should edit both the `.bars` file and `.bwav` (when present) associated with a sound.

The advantage to using TKVSC for an audio replacement mod is that you only ever have to interface with the `.bars` file. If a `.bwav` file exists, replacing it inside of the `.bars` editor will automatically pull the `.bwav` from the Game Dump, and replace its contained audio with the contents of the audio file you used to replace it with.

### 1. Locate the `.bars`
After creating your Project and setting it as the Active Project, return to the Game Dump tab. Locate `Sound\Resource` and you should see a long list of `.bars` files. They are named after the internal name of each actor. Generally, it will be intuitive which internal name goes with what, however for files relating to non-character actors it may be harder to identify the one you want. In the words of Navi, "Listen!". For Navi's callout lines in US English, the file needed is `NV_USen_Custom_Navi.bars.zs`. Add the `.bars` file to your active project, then switch back to the Projects tab.

<img src=https://raw.githubusercontent.com/BladesawStudios/tkvsc-team-wiki/refs/heads/main/wwwroot/docs/simple-sounds-guide/mod_simplesound_LocateBars.png alt="A screenshot of TKVSC's Game Dump tab, showing various `.bars` files including NV_USen_Custom_Navi.bars.zs" width="70%"/>

### 2a. Replacing the Audio
Within the Project, navigate to and select your `.bars` file. You should be presented with a screen similar to the one below:

<img src=https://raw.githubusercontent.com/BladesawStudios/tkvsc-team-wiki/refs/heads/main/wwwroot/docs/simple-sounds-guide/mod_simplesound_BarsView.png alt="A screenshot of TKVSC's Bars viewer" width="80%"/>

As you can see, each audio entry has 3 buttons. `Full` and `Prefetch` switch between previewing the prefetch audio and the full audio file, and `Replace` replaces the audio. Once you've located the specific audio file you want to replace (typically by listening to it), choose `Replace` and select the file you wish to replace it with. The following audio filetypes can be chosen:

* `.wav`
* `.bwav`
* `.mp3`
* `.ogg`
* `.oga`
* `.flac`
* `.m4a`
* `.aac`
* `.opus`
* `.wma`
* `.aiff`
* `.aif`

The default option from here is to open the Loop Editor. It's recommended to do this to preview the audio, then select `Use no loop` if you don't intend for the audio to have seamless loops.

### 2b. If Your Original Audio Has Loop Points
Loop points are denoted by vertical yellow lines. Loop points are used ingame for repeating sections of audio, typically to cut off the intro and fadeout at the end of the audio. It's often done for music, but certain SFX also can have it. Here's what an audio entry with loop points looks like:

<img src=https://raw.githubusercontent.com/BladesawStudios/tkvsc-team-wiki/refs/heads/main/wwwroot/docs/simple-sounds-guide/mod_simplesound_BarsLoopPreview.png alt="An image showing BGM_Shop_GoronCity with its loop points" width="80%"/>

Selecting `Loop` opens the Loop Editor (You also can reach the Loop Editor directly while replacing audio):

<img src=https://raw.githubusercontent.com/BladesawStudios/tkvsc-team-wiki/refs/heads/main/wwwroot/docs/simple-sounds-guide/mod_simplesound_LoopWindow.png alt="An image TKVSC's Loop Editor window" width="80%"/>

Within here, you have a variety of options for managing the loop points within an audio clip. The top portion of the window shows a waveform, with the green highlighted area denoting the area inside the loop. The visual on the lower portion of the window represents the audio at the loop point. Drag around the loop handles on your new audio file until it loops properly, which you can test by choosing `Hear seam`. Additionally, when `Snap to zero crossings` is enabled, the loop point boundaries will snap to a spot where the waveform at both the first and second boundary match exactly.

Once you're done in the loop editor, select `Use these loop points`, or `Use no loop` if your audio does not loop.


After saving in the loop editor (or choosing a file if you did not choose to use the loop editor), the `.bars` file is automatically rewritten, including the prefetch audio. The loose `.bwav`, if present in the original game, is automatically pulled in from the Game Dump and edited.

### 3. Resource Size Table (RESTBL)
Most mods require changes to the RESTBL. As a result, it is always encouraged to use the [RESTBL Calculator](https://gamebanana.com/tools/24830) tool before packaging and submitting your mod. Click here for a guide on using the tool.