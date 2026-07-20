---
title: "Changelog (Beta)"
---

## Changelog (Beta)

### v1.7.12f2 (2026-07-08)
#### Bug Fixes
- Fixed an issue where SMWP could not be opened on some new Intel hardware.

### v1.7.12f (2026-06-05)
#### Other
- The `FoxWriting.dll` plugin has been externalized.

### v1.7.12-beta5 (2026-01-14)
#### Editor
- The editor now supports loading levels with `Ctrl+L`.
- Added a luminate toggle for global fluid lava.
- The luminate toggle for Solid/Transparent Color Blocks has been separated from that of other blocks.
#### Level Features
- Spotlights are no longer rendered when Dark Level is set to 0.
#### Bug Fixes
- Fixed a bug where Mario could automatically perform a small hop when exiting a pipe.
- Fixed a bug where hitting hidden ?-blocks would play a duplicate sound effect.
- Fixed a bug where the level clear sound effect would play after returning to the title screen and waiting for a while.
- Fixed an issue where enabling luminate on Goombas would also force most enemies to have luminate enabled.
- Fixed a bug where, if the level music was set to No Music, the Starman music would never stop once it started playing.
- Fixed an issue where Scene Controllers would override the invincibility music before the Starman state expired.
#### Other
- Updated main menu links: Home now points to the SMWP official website, Help points to SMWP's MF Wiki page, and Upload Download now links to `download.marioforever.net`.
- Removed Softendo logo from the Title Screen.

### v1.7.12-beta4 (2025-09-23)
#### Editor
- When setting a new group of weather parameters in Scene Controllers after testing a level with `F3` / `F4`, the previous values will now be remembered.
- After loading a level, the Scene Controler's stored weather parameters will be cleared; when selecting "Reset weather" in the Scene Controller submenu, the object's current weather parameters can now be reloaded.
#### Bug Fixes
- Fixed an issue where passage exits could not be moved by 16 pixels using the `R`, `F`, `D`, and `G` keys.
- Fixed a bug where the luminate toggle for certain objects did not work.
- Fixed an issue where Weather Settings in Scene Controller, which linked to View Controller or Bowser, were ineffective.
- Fixed a bug where enemies could still be placed in the music/background/weather setting screens.
- Fixed a text alignment issue in the Custom Music settings.

### v1.7.12-beta3 (2025-08-02)
#### Bug Fixes
- Fixed an issue where, on some computers, spotlight in levels with illumination could appear misaligned or distorted.

### v1.7.12-beta2 (2025-07-26)
#### Editor
- Luminate settings are now displayed automatically, without the need to click the middle mouse button.
#### Bug Fixes
- Fixed an issue where, after placing several Scene Controllers, new ones could no longer be placed.
- Fixed a bug where the Thwomp would only trigger one of two bricks when hitting both simultaneously.
- Fixed an issue where the luminate effect setting in Scene Controllers had no effect.
- Fixed a bug where Weather Settings in Scene Controllers were reset after saving and reloading the level.
- Fixed an issue where pressing the Sub Menu key would still play a sound even when not placing blocks.
- Fixed a bug where selecting No when asked whether to apply Weather Settings in Scene Controllers had no effect.
- Fixed an issue where it was possible to press `Ctrl+S` to save while editing parameters for roto-discs, Yellow Paratroopas, Blue Paratroopas, Cheep Cheep Areas, View Controllers, or Fluid Controllers.
- Adjusted the spotlight position for Super Mario and in Camera Mode.
- Fixed an issue in God Mode where pressing the Up key before entering Camera Mode caused the view to shift upward by 8 pixels.

### v1.7.12-beta1 (2025-07-20)
#### Editor
- The WORLD line in the level name can now be customized.
- Updated the Enemy Selector graphics.
- In Camera Mode, Mario's coordinates are now displayed.
- When placing Blocks, user can press the Sub Menu key to toggle whether a solid is placed simultaneously.
- Adjusted the cursor transparency while placing Imitators.
- Increased the transparency of hidden ?-blocks in the editor for better distinction.
- The editor now supports `Ctrl+S` for quick saving.
- Added a restriction preventing Blue Paratroopas from being placed on the topmost row of a level, to avoid cases where their jump height cannot be set, which could block other operations.
#### Level Features
- Weather System: supports Rain, Meteor Showers, Snow, Lightning, and Wind, along with a darkness overlay and a corresponding luminate system. Objects that support lumination can be individually configured by right-clicking them in the selectors. Scene Controllers can also control weather.
- Added new enemies: 4-direction Piranha Heads and 4-direction Spikes.
- When playing a single level, the number of lives can now be customized in the options.
- It is now possible to press multiple keys simultaneously at the very start of a level (note: aerial jump is disabled on frame 1).
- Added new Additional Settings:
    - HUD Display
    - Faster Level Pass
    - Thwomp Activate Blocks
- The Restart Level key can now be customly assigned.
#### Other
- Updated INNOVATION LEAP Logo animation.

### v1.7.11-beta2 (2025-07-09)
#### Level Features
- Added six types of Solid Color Blocks.
- Adjusted the interaction between the Piranha Plants and the shells.
#### Bug Fixes
- Fixed a bug where moving shells could cause 1UP score cycling by hitting Spiny Eggs.
- Fixed an inconsistency between the white pipe tileset and the Solid White Pipe.

### v1.7.11-beta1 (2025-07-08)
#### Editor
- Added Custom Music support. Users can now create their own music packs for their works. Music packs can be placed either in SMWP's custom music folder (`Data\Custom`) or in the same directory as the `.smws` / `.smwp` files.
- When creating a `.smwp` file, the editor will now ask whether to create a corresponding `.smws` file as well.
- Switch Blocks, bonus items, scenery, and enemies can now be dragged to place.
- When "Invisible Solid (`F5`)" is enabled, selecting any solid object will automatically disable that mode.
- Solid/transparent Color Blocks can now be toggled by pressing the middle mouse button.
#### Level Features
- Added new enemies: Blue Piranha Plant, Stone Piranha Plant, and Evil Lakitu.
- Added new blocks: Solid Color Blocks (not to be confused with Switch Blocks) and Solid Color Pipes.
- Added new backgrounds: Mysterious Forest, Relaxing Beach, and Sunset Gradient.
- Pressing `F1` in a level now displays level information at the bottom-left corner of the screen. The title bar also shows the level author and the level's SMWP version.
#### Bug Fixes
- Added an experimental font cache cleanup for the FoxWriting plugin.
- Fixed a bug where the goal's actual score didn't match the displayed score icon.
- Fixed a bug where Cheep Cheep corpses were shifted 16 pixels left.
- Fixed a bug that cause multiple coins, bonuses or scenary to be placed at the same position.
#### Other
- Added version number to the window title.
- Removed the update checker. The game now directly shows the INNOVATION LEAP Logo and enters the title screen upon launch.

### v1.7.10-beta4 (2023-01-09)
#### Bug Fixes
- Fixed a bug where Enemy Optimization settings would be reset after death.
- Fixed a bug where Celeste Style Switch in v1.7.10 caused Mario to get stuck.

### v1.7.10-beta3 (2023-01-07)
####Level Features
- Now holding `F1` during gameplay will show whether Enemy Optimization is currently enabled.
#### Bug Fixes
- Fixed a bug where crawling enemies behaved incorrectly when "Enemy Optimization" was turned off.

### v1.7.10-beta2 (2023-01-04)
#### Editor
- Additional Settings: Add MF Style Pipe Exit option. When enabled, Mario will no longer have invincibility frames upon exiting a passage. Disabled by default.
- Adjusted default states for several Additional Settings: Advanced Switch is now disabled by default, and Celeste Style Switch is enabled by default.
- When testing a level with `F3` / `F4`, the editor now automatically returns to the camera position before testing once the test ends.
#### Level Features
- Removed the old "Smooth Mode" toggle that used to be activated with `F11` during gameplay. It is now replaced with a new toggle: pressing `F11` switches Enemy Optimization on or off.
  - Enemy Optimization refers to the new performance improvements in v1.7.10-beta that mitigate lag when too many enemies are present. It significantly improves performance in large levels.
  - However, this optimization may slightly alter enemy behavior when overlapping with solids. If a level relies on such interactions, disable Enemy Optimization for accurate behavior.
  - v1.7.10 and later have Enemy Optimization enabled by default, while levels from earlier versions have it disabled.
#### Bug Fixes
- Fixed a bug in v1.7.10-beta1 where the background music was malfunctioning on Fast Retry.
- Fixed a bug where Mario's position would be shifted 16 pixels to the right when exiting a horizontal passage.

### v1.7.10-beta1 (2022-08-19)
#### Level Features
- Fixed performance issues in large levels caused by having too many passages.
- Reduced lag caused by a large number of Color Blocks while Celeste Style Switch is enabled.
- Reduced lag in large levels with many active entities (e.g., Goombas, Spinies, Koopas, Mushrooms, etc.).
#### Bug Fixes
- Fixed a bug where the special background music "SMG BEACHBOWL GALAXY" would behave erratically after a Fast Retry or upon level completion.

### v1.7.9-beta3 (2022-07-15)
#### Bug Fixes
- Fixed a bug where some devices cannot use imitators with IDs greater than 127.

### v1.7.9-beta2 (2022-07-14)
#### Editor
- Added the option to select "No Music" in the music selection screen.
#### Bug Fixes
v1.7.9-beta1
#### Known Issues
- Some devices cannot use imitators with IDs greater than 127 because they cannot load backgrounds with a width greater than 4096.

### v1.7.9-beta1 (2022-07-12)
#### Editor
- Added a large number of music tracks, including 13 original compositions for SMWP by 1168438795 and Bluesun.
#### Level Features
- Expanded the autoscroll speed range to `0–60` (note: at extremely high speeds, Mario may suddenly die when the scrolling stops).
- Scene Controller can now be linked to Bowser, allowing Bowser's music to be changed.
- Optimized Imitator-related code to improve performance in levels containing a large number of Imitators.
#### Bug Fixes
- Fixed two shell-related bugs:
  - Stationary Buzzy Beetle shells that haven't been kicked could be killed by another shell.
  - Stationary shells originating from Koopas would not fall after the Colored Block turning from solid to transparent.

### v1.7.7-beta2 (2021-04-03)
#### Bug Fixes
- Fixed a bug where the last autoscroll node would be ignored in v1.7.7-beta1.

### v1.7.7-beta1 (2021-04-02)
#### Editor
- Added the ability to move objects by 16 pixels at once. Hold the Accurate Move key (default: `Z`), then use `R`, `F`, `D`, and `G` (corresponding to Up, Down, Left, and Right) to move the object by 16 pixels at a time.
- Allowed editing of objects with negative coordinates directly by stretching the window and clicking the black border area.
#### Level Features
- Players can now toggle the Switch Block sound effect on or off (press `F2` during gameplay). The setting resets to sound on each time a new level is entered or reopened.
- Added Accessibility Mode (Color). When enabled, Switch Blocks in both gameplay and editor will display letters to help distinguish different colors. This mode is determined by the player, not by the level author.
#### Bug Fixes
- Fixed a discrepancy between MW-style Beetroot movement and the MW 1.1 version (specifically regarding the ability to pass through one-tile-wide vertical gaps).
- Fixed an issue where the editor mistakenly treated pre-1.7 levels (collectively called "legacy levels") as MF-style Beetroot levels.
- Fixed an issue where, in a scenario, if an earlier level used MF-style Beetroot, later legacy levels would also be incorrectly set to MF-style Beetroot.
- Fixed an issue where legacy levels inherited the Fast Retry setting when included in scenarios.
- Fixed a bug introduced after v1.7.3 where vertically moving platforms (cloud or castle types) would abruptly disappear or reappear at screen edges.
- Fixed an issue where the tail end of "Area Objects" (Cheep Cheep Areas, View Controller, Fluid Controller Areas) could not be Accurate Moved. The head end can now be Accurate Moved to change position, and the tail end to adjust size.
- Fixed an issue where pressing `F8` to play BGM or deleting autoscroll nodes caused Autoscroll Objects to have incorrect numbering.
- Fixed a memory residue issue with Blocks after resizing level using `F7`.
- Fixed expired links on the title screen.
- Fixed abnormal edge collision behavior for moving cloud platforms.
- Fixed pitch distortion issues with `ktkm38.dll` BGM playback.
- Fixed overly dark appearance of Dark Clouds in the editor.
- Fixed a bug where a Roto-disc located at coordinates (0, 0) would disappear.

### v1.4.0b (2018-02-02)
#### Editor
- Change the key for manually setting the water level from `F9` to `F10`. (2018-02-02)
- Updated textures for `s_edbonuses` and `s_edmarkers`, and revised several translations. (2018-02-02)

### v1.4.0a (2018-02-02)
#### Editor
- Added new enemies: Buzzy Beetle, Boo, Red Paratroopa, Blue Koopa, Blue Paratroopa, and Electrified Coral. (2018-01-23)
- Unlocked snowfield and desert backgrounds. (2018-01-25)
- Unlocked new blocks including daytime snow grass. (2018-01-25)
- Increased the maximum level size to 1920×1920. (2018-01-29)
- Creating a new level no longer adds extra 10 pixels: for example, a 20×15 grid now correctly produces a 640×480 level. (2018-01-29)
- Reorganized background selections, added large cloud backgrounds and castle backgrounds without parallex, and a revised snowfield background. (2018-01-29)
- Adjusted Bowser portrait size to 128×160; in the editor, it now follows the mouse at the top left. (2018-02-01)
- Significantly improved editor performance. Experimental smooth mode is off by default; press `F11` in the editor to toggle it. (2018-02-01)
- Added scrollbars in the editor, appearing when the mouse briefly stays near the bottom or right edges of the screen. (2018-02-01)
- `F9` in the editor now supports manually setting water level. (2018-02-01)
- Added six new snowfield scenery objects. (2018-02-01)
#### In Game
- Slightly adjusted Boo's swing frequency. (2018-01-25)
- Increased the movement speed of Blue Koopa. (2018-01-25)
- Buzzy Beetle shells can now break bricks. (2018-01-25)
- Attempted to fix the stomp detection issue. (2018-01-25)
- Fixed issues with Starman Mario and shells cause 1UP score cycling on some enemies. (2018-01-25)
- Electrified Corals now render above other layers. (2018-01-25)
- Raised water surface layer above the block layer. (2018-01-29)
- Increased Fire Bro.'s attack frequency. (2018-01-29)
- Enlarged Bowser's portrait. (2018-01-29)
- Super Stars now always move right. (2018-02-01)
- Adjusted desert and snowfield backgrounds. (2018-02-01)
- Hammer Bro. and Fire Bro. will no longer throw hammers or fireballs when they are vertically off-screen. (2018-02-01)
- Removed Thwomp's sound effect when it lands off-screen. (2018-02-01)
- Adjusted pole layering (it previously covered Mario). (2018-02-01)
- Updated black block texture. (2018-02-01)
#### Bug Fixes
- Fixed an issue where kicked Buzzy Beetle shells always moved left. (2018-01-25)
- Fixed an issue where Mario couldn't bounce after stomping an enemy while invincible. (2018-02-01)
#### Other
- Rewrote background rendering code. (2018-02-01)
- Consolidated all background music into the `Data` folder. (2018-02-01)
