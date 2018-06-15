
/*
***+ ANLEITUNG +***

Hier werden neue Spiele eingetragen.
Jedes Spiel besteht aus folgenden Informationen:
name: Der Name des Spiels
engine: Eine der unten aufgeführten Engines.
  Sollte die Engine nicht bei sein, füge sie einfach hinzu.
releaseDate: Wann kam das Spiel ursprünglich raus?
 variante 1: {d: 11, m: 4, y: 2017} für bekanntes Datum
 variante 2: {q: 4, y: 2017} für noch nicht genau bekanntes Datum
imgId: Der Name des entsprechenden Bildes im 'img/' Ordner der Seite
  Heißt der Pfad 'img/zuzu-land.jpg', dann trage 'zuzu-land' ein.
  Das Bild muss ein jpg sein.
 yt: Die ID des YouTube-Videos.
   Das ist ein normaler YouTube-Link: https://www.youtube.com/watch?v=f8Nl1O-eDGk
   Die ID ist in dem Fall f8Nl1O-eDGk.
   Das ist ein anderer Link mit doofen Zusatzinfos: https://www.youtube.com/watch?v=f8Nl1O-eDGk&feature=youtu.be&t=1s
   Da musst du aufpassen, nur die ID zu erwischen. (Nach dem v= bis zum ersten &)
*/

// ENGINES
var SCIMITAR = 'Scimitar'
var ANVIL = 'Anvil'
var ANVIL_NEXT = 'AnvilNext'
var ANVIL_NEXT_2 = 'AnvilNext 2.0'
var CLICK_TEAM_FUSION = 'Clickteam Fusion 2.5'
var COBRA_ENGINE = 'Cobra'
var COCOS2D = 'Cocos2D'
var COCOS2DX = 'Cocos2D-x'
var CONSTRUCT2 = 'Construct 2'
var CREATION_ENGINE = 'Creation-Engine'
var CRYENGINE1 = 'CryEngine 1'
var CRYENGINE2 = 'CryEngine 2'
var CRYENGINE3 = 'CryEngine 3'
var CRYENGINEV = 'CryEngine V'
var DIESEL = 'Diesel'
var FROSTBITE = 'Frostbite'
var GAME_MAKER1 = 'Game Maker Studio'
var GAME_MAKER2 = 'Game Maker Studio 2'
var GAMEBRYO = 'Gamebryo'
var GODOT = 'Godot'
var GOLD_SRC = 'GoldSrc'
var IGNITE = 'Ignite' 
var J_MONKEY_ENGINE = 'jMonkeyEngine'
var LIBGDX = 'LibGDX'
var LUMBERYARD = 'Lumberyard Engine'
var LWJGL = 'LWJGL'
var MADNESS = 'MADNESS Engine'
var MONOGAME = 'MonoGame'
var OWN_ENGINE = 'Own Engine'
var OPENGLES = 'OpenGL ES'
var PHASERJS = 'Phaser.js'
var RAGE = "Rockstar Advanced Game Engine"
var REAL_VIRTUALITY_4 = 'Real Virtuality 4'
var RED_ENGINE = 'REDengine 2/3/4'
var RENDERWARE = 'RenderWare'
var SERIOUS4 = 'Serious Engine 4'
var SOURCE = 'Source Engine'
var SOURCE2 = 'Source 2'
var UNITY = 'Unity'
var UNREAL2_5 = 'Unreal Engine 2.5'
var UNREAL3 = 'Unreal Engine 3'
var UNREAL4 = 'Unreal Engine 4'
var VISION = "Havok Vision"
var XNA = 'Microsoft XNA'
var ANVILNEXT = 'AnvilNext'


GAMES = [
  {name: 'Assassin\'s Creed', engine: SCIMITAR, releaseDate: {d: 13, m: 11, y: 2007}, imgId: 'assassins-creed' , yt: 'EfAL15MH12Q'}, //Jeweils das erste veröffentlichungsdatum in Europa. Quelle: Wikipedia (gilt für alle Teile der Reihe)
  {name: 'Assassin\'s Creed II', engine: ANVIL, releaseDate: {d: 20, m: 11, y: 2009}, imgId: 'assassins-creed-2', yt: 'RaOPz5QLa60'},
  {name: 'Assassin\'s Creed: Brotherhood', engine: ANVIL, releaseDate: {d: 19, m: 11, y: 2010}, imgId: 'assassins-creed-brotherhood' , yt: 'sNviW5Nj8Eo'},
  {name: 'Assassin\'s Creed: Revelations', engine: ANVIL, releaseDate: {d: 15, m: 11, y: 2011}, imgId: 'assassins-creed-revelations', yt: '8-Ixo7QXw_E'},
  {name: 'Assassin\'s Creed III', engine: ANVIL_NEXT, releaseDate: {d: 31, m: 10, y: 2012}, imgId: 'assassins-creed-3', yt: 'ayCZh3cVofY'},
  {name: 'Assassin\'s Creed IV: Black Flag', engine: ANVIL_NEXT, releaseDate: {d: 29, m: 10, y: 2013}, imgId: 'assassins-creed-4', yt: 'qNCPc66NcpE'},
  {name: 'Assassin\'s Creed Rogue', engine: ANVIL_NEXT, releaseDate: {d: 13 , m: 11, y: 2014}, imgId: 'assassins-creed-rogue', yt: 'Da6TZCPODy8'},
  {name: 'Assassin\'s Creed Unity', engine: ANVIL_NEXT_2, releaseDate: {d: 13, m: 11, y: 2014}, imgId: 'assassins-creed-unity', yt: 'EPghYEmAakY'},
  {name: 'Assassin\'s Creed Syndicate', engine: ANVIL_NEXT_2, releaseDate: {d: 23, m: 10, y: 2015}, imgId: 'assassins-creed-syndicate', yt: '7D-lXhGoy7A'},
  {name: 'Kingdom: Classic', engine: UNITY, releaseDate: {d: 21, m: 10, y: 2015}, imgId: 'kingdom_classic', yt: 'NeHPF5i6L2c'}, //http://www.kingdomthegame.com/ //https://steamcommunity.com/app/368230/discussions/0/483368526581338634/ //image: http://vignette2.wikia.nocookie.net/kingdomthegame/images/b/b5/Kingdom_2_13_2016_10_09_48_PM.png/revision/latest?cb=20160809143623
  {name: 'Counter-Strike', engine: GOLD_SRC, releaseDate: {d: 8, m: 11, y: 2000}, imgId: 'counter-strike', yt: 'sdBjDSczgKY'}, //https://de.wikipedia.org/wiki/Counter-Strike
  {name: 'Counter-Strike: Condition Zero', engine: GOLD_SRC, releaseDate: {d: 1, m: 3, y: 2004}, imgId: 'counter-strike-condition-zero', yt: 'sdBjDSczgKY'}, //https://de.wikipedia.org/wiki/Counter-Strike
  {name: 'Mass Effect: Andromeda', engine: FROSTBITE, releaseDate: {d: 23, m: 3, y: 2017}, imgId: 'MEAndromeda', yt: '4Q5gea3iS40'},
  {name: 'Mass Effect', engine: UNREAL3, releaseDate: {d: 16, m: 11, y: 2007}, imgId: 'ME1', yt: '-_6ZMr2bMco'},
  {name: 'Mass Effect 2', engine: UNREAL3, releaseDate: {d: 26, m: 1, y: 2010}, imgId: 'ME2', yt: 'L5c05XSGp5w'},
  {name: 'Mass Effect 3', engine: UNREAL3, releaseDate: {d: 6, m: 3, y: 2012}, imgId: 'ME3', yt: 'Hhcd_GlgpYY'},
  {name: 'Rising World', engine:  J_MONKEY_ENGINE, releaseDate: {d: 3, m: 12, y: 2014}, imgId: 'rising-world', yt: 'tVgVr7IN4lo'},// http://store.steampowered.com/app/324080/Rising_World/
  {name: 'Portal', engine: SOURCE, releaseDate: {d: 9, m: 10, y: 2007}, imgId: 'portal', yt: 'TluRVBhmf8w'},
  {name: 'Portal 2', engine: SOURCE, releaseDate: {d: 19, m: 4, y: 2011}, imgId: 'portal2', yt: 'tax4e4hBBZc'},
  {name: 'Dauntless', engine: UNREAL4, releaseDate: {q: 4, y: 2017}, imgId: 'dauntless', yt: 'xOMq_luhZoA'},
  {name: 'Nidhogg', engine: GAME_MAKER1, releaseDate: {d: 13, m: 1, y: 2014}, imgId: 'nidhogg', yt: 'TaOocHXMhlU'},
  {name: 'Nidhogg 2', engine: GAME_MAKER1, releaseDate: {d: 15, m: 8, y: 2017}, imgId: 'nidhogg2B', yt: 'ZrAkPDSTLIc'},
  {name: 'Yooka-Laylee', engine: UNITY, releaseDate: {d: 11, m: 4, y: 2017}, imgId: 'yooka-laylee', yt: 'R57JwzXartU'},
  {name: 'Stardew Valley', engine: XNA, releaseDate: {d: 26, m: 2, y: 2016}, imgId: 'stardew-valley', yt: 'ot7uXNQskhs'},
  {name: 'Undertale', engine: GAME_MAKER1, releaseDate: {d: 15, m: 9, y: 2015}, imgId: 'undertale', yt: '1Hojv0m3TqA'},
  {name: 'Life is Strange', engine: UNREAL3, releaseDate: {d: 30, m: 1, y: 2015}, imgId: 'life-is-strange', yt: 'YznXuKwJtMg'},
  {name: 'The Forest', engine: UNITY, releaseDate: {d: 30, m: 5, y: 2014}, imgId: 'the-forest', yt: '4qTtVMM3uqQ'},
  {name: 'Star Wars Battlefront', engine: FROSTBITE, releaseDate: {d: 17, m: 11, y: 2011}, imgId: 'battlefront', yt: 'ZwWLns7-xN8'},
  {name: 'Battlefield 3', engine: FROSTBITE, releaseDate: {d: 25, m: 10, y: 2011}, imgId: 'battlefield-3', yt: 'UIUJh2mA8vg'},
  {name: 'Battlefield 4', engine: FROSTBITE, releaseDate: {d: 29, m: 10, y: 2013}, imgId: 'battlefield-4', yt: 'sclTMEd7JN8'},
  {name: 'Battlefield 1', engine: FROSTBITE, releaseDate: {d: 21, m: 10, y: 2016}, imgId: 'battlefield-1', yt: 'c7nRTF2SowQ'},
  {name: 'Crysis 1', engine: {PC: CRYENGINE2, XBOX360: CRYENGINE3, PS3: CRYENGINE3}, releaseDate: {d: 16, m: 11, y: 2007}, imgId: 'crysis-1', yt: '4YMdZnb2Zyo'},
  {name: 'Crysis 2', engine: CRYENGINE3, releaseDate: {d: 22, m: 3, y: 2011}, imgId: 'crysis-2', yt: 'Xa1NvpiwqQk'},
  {name: 'Crysis 3', engine: CRYENGINE3, releaseDate: {d: 19, m: 2, y: 2013}, imgId: 'crysis-3', yt: 'ax5qX6HyB-o'},
  {name: 'The Witcher 3', engine: RED_ENGINE, releaseDate: {d: 19, m: 5, y: 2015}, imgId: 'witcher3', yt: 'tDfa1Qp2SwA'},
  {name: 'Super Mario Run', engine: UNITY, releaseDate: {d: 15, m: 12, y: 2016}, imgId: 'mario-run', yt: 'wSL56aLy8BI'},
  {name: 'Minecraft', engine: LWJGL, releaseDate: {d: 17, m: 5, y: 2009}, imgId: 'minecraft', yt: 'MmB9b5njVbA'},
  {name: 'Super Ubie Island', engine: CONSTRUCT2, releaseDate: {d: 15, m: 1, y: 2016}, imgId: 'superubieisland', yt: 'd41yEc3CGoQ'},
  {name: 'Far Cry', engine: CRYENGINE1, releaseDate: {d: 23, m: 3, y: 2004}, imgId: 'farcry', yt: '_rFi_FdtJ6k'},
  {name: 'The Escapists', engine: CLICK_TEAM_FUSION, releaseDate: {d: 13, m: 2, y: 2015}, imgId: 'The-Escapists', yt: 'ixeHjuPKlUU'}, // https://community.clickteam.com/content/224-The-Escapists-Kickstarter-Launched
  {name: 'Arma 3', engine: REAL_VIRTUALITY_4, releaseDate: {d: 12, m: 9, y: 2013}, imgId: 'arma3', yt: 'M1YBZUxMX8g'}, // https://arma3.com/features/engine
  {name: 'Argo', engine: REAL_VIRTUALITY_4, releaseDate: {d: 22, m: 6, y: 2017}, imgId: 'argo', yt: '459VNYwtuS4'}, // Basiert auf Arma 3
  {name: 'Playerunknown\'s Battlegrounds', engine: UNREAL4, releaseDate: {d: 23, m: 3, y: 2017}, imgId: 'PUBG', yt: 'ODWCbu_cuqk'},
  {name: 'Avorion', engine: OWN_ENGINE, releaseDate: {d: 23, m: 1, y: 2017}, imgId: 'avorion', yt: 'PfhIAmnC9kY'}, // https://www.avorion.net/forum/index.php/topic,57.msg306.html?PHPSESSID=jatgosd1226p6nhufid2r5ieu7#msg306
  {name: 'Half-Life', engine: GOLD_SRC, releaseDate: {d: 8, m: 11, y: 1998}, imgId: 'hl1', yt: '5Wavn29LMrs'},
  {name: 'Half-Life 2', engine: SOURCE, releaseDate: {d: 16, m: 11, y: 2004}, imgId: 'hl2', yt: 'S2CSjTa8Jrc'},
  {name: 'Snipperclips', engine: UNITY, releaseDate: {d: 3, m: 3, y: 2017}, imgId: 'snipperclips', yt: 'FAol5oItb2E'}, // https://en.wikipedia.org/wiki/Snipperclips
  {name: 'Firewatch', engine: UNITY, releaseDate: {d: 9, m: 2, y: 2016}, imgId: 'firewatch', yt: 'd02lhvvVSy8'}, // https://madewith.unity.com/en/games/firewatch
  {name: 'Blobcat', engine: UNITY, releaseDate: {d: 10, m: 3, y: 2017}, imgId: 'blobcat', yt: 'mszlI5CcpQo'}, // https://www.youtube.com/watch?v=LI0r2jh8UAo
  {name: 'Guild Wars 2', engine: OWN_ENGINE, releaseDate: {d: 28, m: 08, y: 2012}, imgId: 'gw2', yt: 'rinOhAev_5k'},
  {name: 'The Talos Principle', engine: SERIOUS4, releaseDate: {d: 11, m: 12, y: 2014}, imgId: 'the-talos-principle', yt: 'iAVh4_wnOIw'}, // https://de.wikipedia.org/wiki/The_Talos_Principle
  {name: 'Dragon Quest XI (PS4)', engine: UNREAL4, releaseDate: {d: 29, m: 7, y: 2017}, imgId: 'dqxi', yt: 'xkntKOgnaTg'}, // https://en.wikipedia.org/wiki/Dragon_Quest_XI
  {name: 'Distance', engine: UNITY, releaseDate: {d: 9, m: 12, y: 2014}, imgId: 'distance', yt: '6IWDTeuukfc'}, // https://www.kickstarter.com/projects/refract/distance-a-next-generation-arcade-racer - Absatz "So, What's New in the Game?"
  {name: 'Nitronic Rush', engine: OWN_ENGINE, releaseDate: {d: 11, m: 11, y: 2011}, imgId: 'nitronic-rush', yt: 'vNuSvuzPL10'}, // http://nitronic-rush.com/ + Link in der Zeile darüber ^
  {name: 'Fast Racing Neo', engine: OWN_ENGINE, releaseDate: {d: 10, m: 12, y: 2015}, imgId: 'fast-racing-neo', yt: 'jaoeNkimAUM'}, // http://nintendoenthusiast.com/blog/2014/04/03/fast-racing-neo-art-balance-using-shinens-2nd-gen-wii-u-engine/
  {name: 'Ingress', engine: LIBGDX, releaseDate: {d: 15, m: 11, y: 2012}, imgId: 'ingress', yt: 'Y6-JAm3NCAk'}, // https://www.quora.com/Which-game-development-framework-is-used-to-develop-Google-Ingress-game-and-why
  {name: 'Delver', engine: LIBGDX, releaseDate: {d: 7, m: 9, y: 2013}, imgId: 'delver', yt: 'vasYOKf8SVE'}, // http://delver.wikia.com/wiki/Delver_Alpha_Version_History
  {name: 'Axiom Verge', engine: MONOGAME, releaseDate: {d: 31, m: 3, y: 2015}, imgId: 'axiom-verge', yt: 'AVX8RjtJ7YQ'}, // https://twitter.com/AxiomVerge/status/742484496893628416
  {name: 'Borderlands 2', engine: UNREAL3, releaseDate: { d: 18, m: 9, y: 2012 }, imgId: 'borland2', yt: '5TW0wJTFLiw' },
  {name: 'Cities: Skylines', engine: UNITY, releaseDate: { d: 10, m: 3, y: 2015 }, imgId: 'skylines', yt: 'CpWe03NhXKs' },
  {name: 'Rocket League', engine: UNREAL3, releaseDate: { d: 7, m: 7, y: 2015 }, imgId: 'rocketl', yt: 'Vawwy2eu5sA' },
  {name: 'Deus Ex GO', engine: UNITY, releaseDate: {d: 18, m: 8, y: 2016}, imgId: 'dxgo', yt: 'TbvVA1yeSUA'},
  {name: 'Superhot', engine: UNITY, releaseDate: {d: 25, m: 2, y: 2016}, imgId: 'superhot', yt: 'JYAUlPMqnKk'},
  {name: 'Hearthstone: Heroes of Warcraft', engine: UNITY, releaseDate: {d: 11, m: 3, y: 2014}, imgId: 'hearthstone', yt: '4y1-wBdkKfA'},
  {name: 'The Elder Scrolls V: Skyrim', engine: CREATION_ENGINE, releaseDate: {d: 11, m: 11, y: 2011}, imgId: 'skyrim', yt: 'JSRtYpNRoN0'},
  {name: 'Fallout 4', engine: CREATION_ENGINE, releaseDate: {d: 10, m: 11, y: 2015}, imgId: 'fallout4', yt: 'GE2BkLqMef4'},
  {name: 'Ark: Survival Evolved', engine: UNREAL4, releaseDate: {d: 3, m: 6, y: 2015}, imgId: 'arkse', yt: 'ajOU9qycJTI'},
  {name: 'Counter-Strike: Global Offensive', engine: SOURCE, releaseDate: {d: 12, m: 8, y: 2012}, imgId: 'counter-strike-global-offensive', yt: 'edYCtaNueQY'}, // https://de.wikipedia.org/wiki/Counter-Strike:_Global_Offensive
  {name: 'Counter-Strike: Source', engine: SOURCE, releaseDate: {d: 1, m: 11, y: 2004}, imgId: 'counter-strike-source', yt: 'bvI62FUDpKA'}, // https://de.wikipedia.org/wiki/Counter-Strike:_Source
  {name: 'Team Fortress 2', engine: SOURCE, releaseDate: {d: 10, m: 10, y: 2007}, imgId: 'team-fortress-2', yt: 'h_c3iQImXZg'}, // https://de.wikipedia.org/wiki/Team_Fortress_2
  {name: 'Dota 2', engine: SOURCE2, releaseDate: {d: 9, m: 7, y: 2013}, imgId: 'dota-2', yt: '-cSFPIwMEq4'}, // https://de.wikipedia.org/wiki/Dota_2
  {name: 'Project CARS', engine: MADNESS, releaseDate: {d: 7, m: 5, y: 2015}, imgId: 'pcars', yt: 'DQIbUBbNGd0'},
  {name: 'Overwatch', engine: OWN_ENGINE, releaseDate: {d: 24, m: 05, y: 2016}, imgId: 'overwatch', yt: 'FqnKB22pOC0'},
  {name: 'Bioshock', engine: UNREAL2_5, releaseDate: {d: 24,m: 8, y: 2007}, imgId: 'bioshock', yt: 'rrqfPG4ZcAA'},
  {name: 'Bioshock 2', engine: UNREAL2_5, releaseDate: {d: 9,m: 2, y: 2010}, imgId: 'bioshock2', yt: 'Q8lngIFXRi4'},
  {name: 'Bioshock Infinite', engine: UNREAL3, releaseDate: {d: 26,m: 3, y: 2013}, imgId: 'bioshock_infinite', yt: 'bLHW78X1XeE'},
  {name: 'Fallout 3', engine: GAMEBRYO, releaseDate: {d: 28,m: 10, y: 2008}, imgId: 'fallout3', yt: 'O7a1GVlC9SM'},
  {name: 'Fallout: New Vegas', engine: GAMEBRYO, releaseDate: {d: 19,m: 10, y: 2010}, imgId: 'fallout_nv', yt: 'W_-6ymuk9i4'},
  {name: 'Terraria', engine: XNA, releaseDate: {d: 16, m: 5, y: 2011}, imgId: 'terraria', yt: '-nXdtDgpPeE'},
  {name: 'Gunslugs 2', engine: LIBGDX, releaseDate: {d: 14, m: 1, y: 2015}, imgId: 'gunslugs2', yt: 'BxL8HIPMcFA'},
  {name: 'Gwent: The Witcher Card Game', engine: UNITY, releaseDate: {d: 24, m: 5, y: 2017}, imgId: 'gwent', yt: 'sKqy04OmOGo'}, // https://en.wikipedia.org/wiki/CD_Projekt#Games_development (Releasetag = Start der Open Beta)
  {name: 'Pokemon GO', engine: UNITY, releaseDate: {d: 6, m: 7, y: 2016}, imgId: 'pokemon_go', yt: '2sj2iQyBTQs'}, //https://www.youtube.com/watch?v=8hru629dkRY
  {name: 'Planet Coaster', engine: COBRA_ENGINE, releaseDate: {d: 17, m: 11, y: 2016}, imgId: 'planet_coaster', yt: 'QDqlXGg394k'}, //https://de.wikipedia.org/wiki/Planet_Coaster
  {name: 'Elite: Dangerous', engine: COBRA_ENGINE, releaseDate: {d: 16, m: 12, y: 2014}, imgId: 'elite_dangerous', yt: 'YESNObZJTgQ'},
  {name: 'Ori and the Blind Forest', engine: UNITY, releaseDate: {d: 11, m: 3, y: 2015}, imgId: 'ori_and_the_blind_forest', yt: 'cklw-Yu3moE'}, //https://de.wikipedia.org/wiki/Ori_and_the_Blind_Forest
  {name: 'Ori and the Will of the Wisps', engine: UNITY, releaseDate: {q: 2, y: 2018}, imgId: 'ori_and_the_will_of_the_wisps', yt: '2kPSl2vyu2Y'}, //Releasedate is not really known yet, would be nice to have a case for this
  {name: 'PAYDAY: The Heist', engine: DIESEL, releaseDate: {d: 20, m: 10, y: 2011}, imgId: 'payday_the_heist', yt: 'o9PGpkZNQKg'},
  {name: 'PAYDAY 2', engine: DIESEL, releaseDate: {d: 13, m: 8, y: 2013}, imgId: 'payday_2', yt: 'Gb-_DKC6wc4'},
  {name: 'PREY', engine: CRYENGINE3, releaseDate: {d: 5, m: 5, y: 2017}, imgId: 'prey_2017', yt: '1hKTZGflqrc'},
  {name: 'Rust', engine: UNITY, releaseDate: {d: 11, m: 12, y: 2013}, imgId: 'rust', yt: 'gcvDUxdmntw'},
  {name: 'Subnautica', engine: UNITY, releaseDate: {d: 16, m: 12, y: 2014}, imgId: 'subnautica', yt: '_7BzngvURrk'},
  {name: 'Fifa 16', engine: IGNITE, releaseDate: {d: 22, m: 9, y: 2015}, imgId: 'fifa16', yt: 'bwz98athxQ8'}, 
  {name: 'Fifa 17', engine: FROSTBITE, releaseDate: {d: 27, m: 9 , y: 2016}, imgId: 'fifa17', yt: 'yYjD78X1d9Q'}, 
  {name: 'Fifa 18', engine: FROSTBITE, releaseDate: {d: 29, m: 9, y: 2017}, imgId: 'fifa18', yt: 'z_7Gz_RFLnE'}, 
  {name: 'League of Legends', engine: OWN_ENGINE, releaseDate: {d: 27, m: 10, y: 2009}, imgId: 'league-of-legends', yt: 'cXZqfuJ9Zps'},
  {name: 'Grand Theft Auto III', engine: RENDERWARE, releaseDate: {d: 22, m: 10, y: 2001}, imgId: 'gta-3', yt: 'lCyiW882D7U'}, // https://de.wikipedia.org/wiki/Grand_Theft_Auto_III
  {name: 'Grand Theft Auto: Vice City', engine: RENDERWARE, releaseDate: {d: 27, m: 10, y: 2002}, imgId: 'gta-vc', yt: 'MpmDawqOfqs'}, // https://de.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City
  {name: 'Grand Theft Auto: San Andreas', engine: RENDERWARE, releaseDate: {d: 26, m: 10, y: 2004}, imgId: 'gta-sa', yt: 'u_CbHrBbHNQ'}, // https://de.wikipedia.org/wiki/Grand_Theft_Auto:_San_Andreas
  {name: 'Grand Theft Auto IV', engine: RAGE, releaseDate: {d: 29, m: 4, y: 2008}, imgId: 'gta-4', yt: 'M80K51DosFo'}, // https://de.wikipedia.org/wiki/Grand_Theft_Auto_IV
  {name: 'Grand Theft Auto V', engine: RAGE, releaseDate: {d: 17, m: 9, y: 2013}, imgId: 'gta-5', yt: 'QkkoHAzjnUs'}, // https://de.wikipedia.org/wiki/Grand_Theft_Auto_V
  {name: 'Geometry Dash', engine: COCOS2DX, releaseDate: {d: 2, m: 8, y: 2013}, imgId: 'geometrydash', yt: 'ELeCcv11zXE'},
  {name: 'Stronghold 3', engine: VISION, releaseDate: {d: 25, m: 10, y: 2011}, imgId: 'stronghold3', yt: 'yoivBzNbhzI'}, // https://de.wikipedia.org/wiki/Stronghold_3
  {name: 'Stronghold Crusader 2', engine: VISION, releaseDate: {d: 23, m: 9, y: 2014}, imgId: 'strongholdcrusader2', yt: 'dGfswGVEo0E'}, // https://de.wikipedia.org/wiki/Stronghold_Crusader_2
  {name: 'Octopath Traveler', engine: UNREAL4, releaseDate: {d: 13, m: 7, y: 2018}, imgId: 'octopathtraveler', yt: 'G2lwxuOk2FY'}
]
