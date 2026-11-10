# The Resource Size Table
### Background
Nintendo's modern game engine, in addition to some of their other engines, has a file located in `romfs\System\Resource` that is critical to almost every mod, referred to as the Resource Size Table (`RESBTL`). Its name typically begins with `ResourceSizeTable.Product`, and the rest varies depending on the update and sometimes platform of the game. For example:

* Ocarina of Time v1.1.1's is called `ResourceSizeTable.Product.111.Nin_Ounce_NVN2.rsizetable.zs`
* Tears of the Kingdom v1.2.1's `RESTBL` is called `ResourceSizeTable.Product.121.rsizetable.zs`
* Tomodachi Life LTD v1.0.0's `RESTBL` is called `ResourceSizeTable.Product.100.Nin_NX_NVN.rsizetable.zs`

This file contains the name of most files in the game, and a size in bytes determining the maximum amount of space in memory they're allowed to occupy. If a file is too small compared to this number, or too larger, the game may crash or freeze when launching or when that file attempts to load into memory. As a result, the community makes RESTBL Calculators, tools that read your mod's files and generate a Resource Size Table based on them. This page holds guides, or references to guides, on using Bladesaw Studios' RESTBL Calculator.

## Prerequisites
* [RESTBL Calculator](https://gamebanana.com/tools/24830)
* A Windows, Linux, or MacOS device
* A mod to use the RESTBL Calculator on

The RESTBL Calculator was developed by Bladesaw Studios, the creators of TKVSC and the site you're reading this on. To launch it, simply download the file with a name matching your operating system. After extracting, launch the tool, and you should see a window like this one, except nothing will be filled in yet:

<img src="https://raw.githubusercontent.com/TKVSC-Team/totk-vscode/refs/heads/main/docs/tutorials/restbl-guide/restbl_launch_empty.png" alt="A screenshot of the prompt directing the user to select the folder containing their RomFS Dump" width="70%"/>