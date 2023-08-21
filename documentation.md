# misaka documentation

<!-- TOC -->
- [Variables](#misaka-variables)
     - [Folder and File names](#Folder-and-File-names)
       - [`%Misaka_Path{'SpringLang'}%`](#misaka_pathspringlang)
       - [`%Misaka_Path{'DeviceType'}%`](#misaka_pathdevicetype)
       - [`%Misaka_AppUUID{'bundle id', 'Bundle'}%`](#misaka_appuuidbundle-id-bundle)
       - [`%Misaka_Segment{Name: 'target file name', [(Identifier: 'iOSver', Value: '16')]}%`](#misaka_segmentName-target-file-name-identifier-iOSver-Value-16)
       - [`%Misaka_Binary%`](#misaka_binary)
     - [Inside Plist and Loctable files](#Inside-Plist-and-Loctable-files)
       - [`%Misaka_Overwrite%`](#misaka_overwrite)
       - [`%Misaka_Remove%`](#misaka_remove)
       - [`%Misaka_Path{'SpringLang'}%`](#misaka_pathspringlang-1)
- [Config.plist(Advanced Settings)](#configplistadvanced-settings)
     - [Basic form](#basic-form)
       - [Link](#link)
       - [Image](#image)
       - [Text(Readme)](#textreadme)
       - [ImagePicker](#imagepicker)
       - [FilePicker](#filepicker)
       - [ColorPicker](#colorpicker)
       - [ColorPicker_Hex](#colorpicker_hex)
       - [Int](#int)
       - [Double](#double)
       - [Toggle](#toggle)
       - [Segment](#segment)
       - [Navigation link](#navigation-link)
       - [Picker](#picker)
       - [Hider toggle](#hider-toggle)
       - [Preset](#preset)
     - [How to combine with variables](#how-to-combine-with-variables)
       - [File names](#file-names)
       - [Inside files](#inside-files)
 
<!-- /TOC -->

# Variables

## Folder and File names

### `%Misaka_Path{'SpringLang'}%`

```
ja.lproj / CoverSheet.strings
↓
%Misaka_Path{'SpringLang'}%.lproj / CoverSheet.strings
```

### `%Misaka_Path{'DeviceType'}%`

```
DefaultModuleSettings~iphone.plist
↓
DefaultModuleSettings~%Misaka_Path{'DeviceType'}%.plist
```

### `%Misaka_AppUUID{'bundle id', 'Bundle'}%`
### `%Misaka_AppUUID{'bundle id', 'Data'}%`
### `%Misaka_AppUUID{'bundle id', 'AppGroup'}%`

```
Application / 0B0E8030-EC09-4FE2-A6D9-D225F4A46C44
↓
Application / %Misaka_AppUUID{'org.mozilla.ios.Firefox', 'Bundle'}%
```

### `%Misaka_Segment{Name: 'target file name', [(Identifier: 'iOSver', Value: '16')]}%`
### `%Misaka_Segment{Name: 'target file name', [(Identifier: 'Notched', Value: 'Yes')]}%`
### `%Misaka_Segment{Name: 'target file name', [(Identifier: 'Option', Value: 'Option1')]}%`

```
BackBoardServices.framework
↓
%Misaka_Segment{Name: 'BackBoardServices.framework', [(Identifier: 'resplogo', Value: 'SANS'), (Identifier: 'iOSver', Value: '16')]}%
```

### `%Optional%`

```
lock@2x-812h.ca / main.caml
lock@3x-d73.ca / main.caml
↓
lock@2x-812h.ca / %Optional%main.caml
lock@3x-d73.ca / %Optional%main.caml
```

### `%Misaka_Regex%`

```
1880.WWDC_2021-414w-896h@2x~iphone.wallpaper
↓
%Misaka_Regex%1880.WWDC_2021-(.+)~iphone.wallpaper
```

### `%Misaka_Resize%`

**Deprecated**
```
en-0---white.png
↓
%Misaka_Resize%en-0---white.png
```

### `%Misaka_Binary%`

```
LightStandard.car
↓
%Misaka_Binary%LightStandard.car
```

Inside Files
```
{
    "Overwrite": {
        "16088": "darkAccent",
        "16248": "darkAccent"
    }
}
```

## Inside Plist and Loctable files

### `%Misaka_Overwrite%`
### `%Misaka_Remove%`

```
<key>%Misaka_Overwrite%</key> <string></string>
<key>Key2</key> <string>Edited</string>
<key>Key5</key> <string>%Misaka_Remove%</string>
```

### `%Misaka_Path{'SpringLang'}%`

Inside loctable files(ios16)
```
<key>en</key>
<key>ja</key>
↓
<key>%Misaka_Path{'SpringLang'}%</key>
```

# Config.plist(Advanced Settings)

File structure
```
ColorCC(tweak name)
  ├─config.plist
  └─Overwrite
      └─System
          └─...
```

## Basic form
```
Root
  ├─Item 0[Dictionary]
  │   ├─Category
  │   └─Tweaks[Array]
  │       ├─Item 0[Dictionary]
  │       │   ├─Label(Exmaple)
  │       │   ├─Type(String)
  │       │   ├─UI(Link)
  │       │   └─URL(https://exmple.com)
  │       │
  │       └─...Item x
  └─...Item x
```

### Link
```
└─Item 0[Dictionary]
    ├─Label(Exmaple)
    ├─UI(Link)
    └─URL(https://exmple.com)
```

### Image
```
└─Item 1[Dictionary]
    ├─Label(tamago)
    ├─UI(Image)
    ├─URL(https://exmple.com)
    ├─Height(0)
    └─Width(0)
```

### Text(Readme)
```
└─Item 2[Dictionary]
    ├─Label(Good morning)
    └─UI(Text)
```

### Text input
```
└─Item 3[Dictionary]
    ├─Identifier
    ├─Label(Text input)
    ├─Type(String)
    └─Value(Hello)
```

### ImagePicker
```
└─Item 4[Dictionary]
    ├─Label(Image select)
    ├─UI(ImagePicker)
    └─URL(/var/mobile/Documents/exmaple.png)
```

### FilePicker
```
└─Item 5[Dictionary]
    ├─Label(File select) 
    ├─Type(String)
    ├─UI(FilePicker)
    └─URL(/System/Library/Fonts/CoreUI/SFUI.ttf)
```

### ColorPicker
```
└─Item 6[Dictionary]
    ├─Identifier
    ├─Label(Color select) 
    ├─Type(Color_Tinting)
    └─Value[Dictionary]
        ├─tintAlpha(0.8)
        └─tintColor[Dictionary]
            ├─alpha(1)
            ├─blue(0.76)
            ├─green(0.76)
            └─red(0.76)
```

### ColorPicker_Hex
```
└─Item 7[Dictionary]
    ├─Identifier
    ├─Label(Color select) 
    ├─Type(Color_Hex)
    ├─Value(C46661FF)
    └─Param
        ├─BGRA[Boolean]
        └─NoHash[Boolean]
```

### Int
```
└─Item 8[Dictionary]
    ├─Identifier
    ├─Label(Position X)
    ├─Type(Int)
    ├─Min(0) [Number]
    ├─Max(100) [Number]
    ├─Step(2) [Number]
    └─Value(26) [Number]
```

### Double
```
└─Item 9[Dictionary]
    ├─Identifier
    ├─Label(Opacity)
    ├─Type(Double)
    ├─Min(0) [Number]
    ├─Max(1) [Number]
    ├─Step(0.1) [Number]
    └─Value(0.5) [Number]
```

### Toggle
```
└─Item 10[Dictionary]
    ├─Identifier
    ├─Label(Focus module)
    ├─Type(Bool)
    ├─UI(Toggle)
    └─Value[Boolean]
```

### Segment
```
└─Item 11[Dictionary]
    ├─Identifier
    ├─UI(SegmentedControl)
    └─Selection[Array]
        ├─Item 0[Dictionary]
        │   ├─Label
        │   └─Value
        └─...Item x
```

### Navigation link
```
└─Item 12[Dictionary]
    ├─Label(Standard)
    ├─UI(NavigationLink)
    └─Categories[Array]
        ├─Item 0[Dictionary]
        │   ├─Category
        │   └─Tweaks[Array]
        │       ├─Item 0[Dictionary]
        │       │   ├─Label
        │       │   ├─Type(String)
        │       │   ├─UI(Link)
        │       │   └─URL(https://exmple.com)
        │       └─...Item x
        └─...Item x
```

### Picker
```
└─Item 13[Dictionary]
    ├─Identifier
    ├─Label(Image)
    ├─UI(Picker)
    ├─Value(noimage)
    └─Selection[Array]
        ├─Item 0[Dictionary]
        │   ├─Label(No image)
        │   └─Value(noimage)
        └─...Item x
```

### Hider toggle
```
├─Item 14[Dictionary]
│   ├─Label(Advanced Mode)
│   ├─UI(Hider_Toggle)
│   ├─Value[Boolean]
│   └─Identifiers[Dictionary]
│       ├─To_Disable[Array]
│       │   └─Item 0(link1)
│       └─To_Enable[Array]
│           └─Item 0(link2)
├─Item 15[Dictionary]
│   ├─Identifier(link1)
│   ├─Label(Exmaple)
│   ├─Type(String)
│   ├─UI(Link)
│   └─URL(https://exmple.com)
└─Item 16[Dictionary]
    ├─Disabled[Boolean]
    ├─Identifier(link2)
    ├─Type(String)
    ├─Label(Exmaple2)
    ├─UI(Link)
    └─URL(https://exmple2.com)
```

### Preset
```
├─Item 17[Dictionary]
│   ├─Identifier(back.blur)
│   ├─Label(blur1)
│   ├─Type(Double)
│   ├─Min(0) [Number]
│   ├─Max(100) [Number]
│   ├─Step(0.5) [Number]
│   └─Value(10) [Number]
└─Item 18[Dictionary]
    ├─Label(blue)
    ├─UI(Preset)
    └─Presets[Array]
        └─Item 0[Dictionary]
            ├─Identifier(back.blur)
            └─value(50) [Number]
```
## How to combine with variables

### File names
Switching between two files.
```
%Misaka_Segment{Name: 'BackBoardServices.framework', [(Identifier: 'resplogo', Value: 'sans')]}%
%Misaka_Segment{Name: 'BackBoardServices.framework', [(Identifier: 'resplogo', Value: 'toriel')]}%
↓
Item 0[Dictionary]
  ├─Identifier(resplogo) ←
  ├─Type(String)
  ├─UI(SegmentedControl)
  └─Selection[Array]
      ├─Item 0[Dictionary]
      │   ├─Label(Option 1)
      │   └─Value(sans) ←
      └─Item 1[Dictionary]
          ├─Label(Option 2)
          └─Value(toriel) ←
```

### Inside files
Enable text input from Advanced Settings.
```
<key>%Misaka_Overwrite%</key> <string></string>
<key>SWIPE_UP_TO_OPEN</key> <string>custom.opentext</string>
<key>SWIPE_UP_TO_UNLOCK</key> <string>custom.unlocktext</string>
↓
├─Item 0[Dictionary]
│   ├─Identifier(custom.opentext) ←
│   ├─Label(Open text)
│   ├─Type(String)
│   └─Value(Hello)
└─Item 1[Dictionary]
    ├─Identifier(custom.unlocktext) ←
    ├─Label(Unlock text)
    ├─Type(String)
    └─Value(Good morning)
```
