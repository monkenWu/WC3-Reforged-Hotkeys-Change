var w3Set = function(){
    var ob = {};
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            ob["ComHeroOnly"+i+j] = 0;
            ob["ComHotkey"+i+j] = -1;
        }
    }
    for (let i = 0; i < 6; i++) {
        ob["InvHeroOnly"+i] = 0;
        ob["InvHotkey"+i] = -1;
    }
    return ob;
}();

function getFile(dom){
    var str = getW3PerFile(w3Set);
    var blob = new Blob([str], {
        type: "text/plain"
    });
    var url = window.URL.createObjectURL(blob);
    $(dom).attr('href', url).attr('download', "War3Preferences.txt");
}

var getW3PerFile = function(set){
    return `
[Commandbar Hotkeys 00]
HeroOnly=${set.ComHeroOnly00}
Hotkey=${set.ComHotkey00}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 01]
HeroOnly=${set.ComHeroOnly01}
Hotkey=${set.ComHotkey01}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 02]
HeroOnly=${set.ComHeroOnly02}
Hotkey=${set.ComHotkey02}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 03]
HeroOnly=${set.ComHeroOnly03}
Hotkey=${set.ComHotkey03}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 10]
HeroOnly=${set.ComHeroOnly10}
Hotkey=${set.ComHotkey10}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 11]
HeroOnly=${set.ComHeroOnly11}
Hotkey=${set.ComHotkey11}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 12]
HeroOnly=${set.ComHeroOnly12}
Hotkey=${set.ComHotkey12}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 13]
HeroOnly=${set.ComHeroOnly13}
Hotkey=${set.ComHotkey13}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 20]
HeroOnly=${set.ComHeroOnly20}
Hotkey=${set.ComHotkey20}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 21]
HeroOnly=${set.ComHeroOnly21}
Hotkey=${set.ComHotkey21}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 22]
HeroOnly=${set.ComHeroOnly22}
Hotkey=${set.ComHotkey22}
MetaKeyState=0
QuickCast=0

[Commandbar Hotkeys 23]
HeroOnly=${set.ComHeroOnly23}
Hotkey=${set.ComHotkey23}
MetaKeyState=0
QuickCast=0

[Custom Hotkeys 0]
FromHotkey=0
FromKeyEnabled=0
FromMetaKeyState=0
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Custom Hotkeys 1]
FromHotkey=0
FromKeyEnabled=0
FromMetaKeyState=0
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Custom Hotkeys 2]
FromHotkey=0
FromKeyEnabled=0
FromMetaKeyState=0
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Custom Hotkeys 3]
FromHotkey=0
FromKeyEnabled=0
FromMetaKeyState=0
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Custom Hotkeys 4]
FromHotkey=0
FromKeyEnabled=0
FromMetaKeyState=0
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Custom Hotkeys 5]
FromHotkey=0
FromKeyEnabled=0
FromMetaKeyState=0
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Custom Hotkeys 6]
FromHotkey=0
FromKeyEnabled=0
FromMetaKeyState=0
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Custom Hotkeys 7]
FromHotkey=0
FromKeyEnabled=0
FromMetaKeyState=0
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Gameplay]
allyFilter=2
ammmaphashes=
ammmapprefs=
ammrace=32
ammstyles=
ammtype=0
autosaveReplay=0
coloredhealthbars=1
creepFilter=1
customfilter=0
customkeys=2
custommask=0
displayapm=0
displayfps=0
displayping=0
formations=1
formationtoggle=1
gamespeed=3
healthbars=1
herobar=1
heroframes=1
herolevel=1
multiboardon=0
netgameport=6112
numericCooldown=0
occlusion=0
schedrace=32
subgrouporder=0
terrainFilter=1
tooltips=1

[Input]
confinemousecursor=2
keyscroll=50
mousescroll=50
mousescrolldisable=0
reducemouselag=0

[Inventory Hotkeys 0]
HeroOnly=${set.InvHeroOnly0}
Hotkey=${set.InvHotkey0}
MetaKeyState=0
QuickCast=0

[Inventory Hotkeys 1]
HeroOnly=${set.InvHeroOnly1}
Hotkey=${set.InvHotkey1}
MetaKeyState=0
QuickCast=0

[Inventory Hotkeys 2]
HeroOnly=${set.InvHeroOnly2}
Hotkey=${set.InvHotkey2}
MetaKeyState=0
QuickCast=0

[Inventory Hotkeys 3]
HeroOnly=${set.InvHeroOnly3}
Hotkey=${set.InvHotkey3}
MetaKeyState=0
QuickCast=0

[Inventory Hotkeys 4]
HeroOnly=${set.InvHeroOnly4}
Hotkey=${set.InvHotkey4}
MetaKeyState=0
QuickCast=0

[Inventory Hotkeys 5]
HeroOnly=${set.InvHeroOnly5}
Hotkey=${set.InvHotkey5}
MetaKeyState=0
QuickCast=0

[Map]
battlenet_V0=
battlenet_V1=
lan_V0=
lan_V1=
skirmish_V0=
skirmish_V1=

[Misc]
bnetGateway=
chatsupport=0
clickedad=0
clickedclan=0
clickedladder=0
clickedtourn=0
hd=1
legacylinkreminder=0
offlineavatar=p004
profanity=1
seenintromovie=1
settingsversion=2
subtitles=1
teen=0

[Mouse Mid Button Down]
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Mouse Wheel Down]
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Mouse Wheel Up]
HeroOnly=0
ToHotkey=0
ToKeyEnabled=0
ToMetaKeyState=0

[Sound]
ambient=1
donotusewaveout=0
environmental=1
movement=1
music=1
musicvolume=40
nosoundwarn=1
outputsounddev=-1
outputspeakermode=-1
positional=1
sfx=1
sfxvolume=100
unit=1
windowfocus=0

[String]
userbnet=
userlocal=

[Video]
adapter=0
antialiasing=0
backgroundmaxfps=10
colordepth=32
foliagequality=1
gamma=30
lightingquality=1
maxfps=200
particles=1
previouswindowmode=0
refreshrate=60
resetdefaults=0
resheight=1080
reswidth=1920
shadowquality=1
spellfilter=1
texquality=1
vsync=0
windowheight=774
windowmode=2
windowwidth=1376
windowx=240
windowy=177
    `;
}