# The Resource Size Table
### Background
Nintendo's modern game engine, in addition to some of their other engines, has a file located in `romfs\System\Resource` that is critical to almost every mod, referred to as the Resource Size Table (`RESBTL`). Its name typically begins with `ResourceSizeTable.Product`, and the rest varies depending on the update and sometimes platform of the game. For example:

* Ocarina of Time v1.1.1's is called `ResourceSizeTable.Product.111.Nin_Ounce_NVN2.rsizetable.zs`
* Tears of the Kingdom v1.2.1's `RESTBL` is called `ResourceSizeTable.Product.121.rsizetable.zs`
* Tomodachi Life LTD v1.0.0's `RESTBL` is called `ResourceSizeTable.Product.100.Nin_NX_NVN.rsizetable.zs`

This file contains the name of most files in the game, and a size in bytes determining the amount of space in memory they've been allocated. If a file is too small compared to this number, or too larger, the game may crash or freeze when launching or when that file attempts to load into memory. As a result, the community makes RESTBL Calculators, tools that read your mod's files and generate a Resource Size Table based on them. This page holds guides, or references to guides, on using Bladesaw Studios' RESTBL Calculator.

## Prerequisites
* [RESTBL Calculator](https://gamebanana.com/tools/24830)
* A Windows, Linux, or MacOS device
* A mod to use the RESTBL Calculator on

The RESTBL Calculator was developed by Bladesaw Studios, the creators of TKVSC and the site you're reading this on. To launch it, simply download the file with a name matching your operating system. Extract then launch the tool, and you should see this window:

<img src=https://raw.githubusercontent.com/BladesawStudios/tkvsc-team-wiki/refs/heads/main/wwwroot/docs/restbl-guide/restbl_launch_empty.png alt="A screenshot of the RESTBL Calculator as it appears when first launching" width="70%"/>

The tool works across multiple games, and TOTK v1.0.0 is the default game selected. Choose the game and version you would like to generate a RESTBL for from the dropdown menus, then select `Generate RESTBL`. Expand the window or scroll down, and the following will be displayed:

<img src=https://raw.githubusercontent.com/BladesawStudios/tkvsc-team-wiki/refs/heads/main/wwwroot/docs/restbl-guide/restbl_Results.png alt="A screenshot of the RESTBL Calculator after generating a RESTBL for a mod made for Ocarina of Time v1.0.0" width="70%"/>

Shown here is a list of the paths of all entries in the RESTBL edited or added by the mod, the vanilla entry, the calculated entry, and the entry written to the RESTBL.

If your mod doesn't edit any files that change between updates, it's recommended to generate the RESTBL for all updates, as this maximizes the amount of users who can use your mod To do this, simply select a different version and press the `Generate RESTBL` button again

Congratulations! You're now ready to test your mod then package it for submission to GameBanana.