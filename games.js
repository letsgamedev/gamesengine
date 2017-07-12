/*
***+ ANLEITUNG +***

Hier werden neue Spiele eingetragen.
Jedes Spiel besteht aus folgenden Informationen:
name: Der Name des Spiels
engine: Eine der unten aufgeführten Eingines.
  Sollte die Engine nicht bei sein, füge sie einfach hinzu.
releaseDate: Wann kam das Spiel ursprünglich raus?
 variante 1: {d: 11, m: 4, y: 2017} für bekanntes Datum
 variante 2: {q: 4, y: 2017} für noch nicht genau bekanntes Datum
imgId: Der Name des dementsprechenden Bildes im 'img/' order der Seite
  heißt der Pfad 'img/zuzu-land.jpg' dann trage 'zuzu-land' ein.
  Das Bild muss ein jpg sein
 yt: Die id des YouTube Videos.
   Das ist ein normaler YouTube Link: https://www.youtube.com/watch?v=f8Nl1O-eDGk
   Die ID ist in dem fall f8Nl1O-eDGk
   Das ist ein anderer Link mit doofen Zusatzinfos: https://www.youtube.com/watch?v=f8Nl1O-eDGk&feature=youtu.be&t=1s
   Da musst du aufpassen nur die ID zu erwischen (Nach dem v= bis zum ersten &)
*/

// ENGINES
var UNREAL4 = 'Unreal Engine 4'
var UNREAL3 = 'Unreal Engine 3'
var UNITY = 'Unity'
var XNA = 'Microsoft XNA'
var GAME_MAKER1 = 'Game Maker Studio'
var GAME_MAKER2 = 'Game Maker Studio 2'
var GODOT = 'Godot'
var FROSTBITE = 'Frostbite'   // https://www.ea.com/frostbite/games tbc
var OWN_ENGINE = 'Own Engine'
var PHASERJS = 'Phaser.js'
var COCOS2D = 'Cocos2D'
var RED_ENGINE = 'REDengine 2/3/4'
var LWJGL = 'LWJGL'
var CONSTRUCT2 = 'Construct 2'
var CTF = 'Clickteam Fusion 2.5'
var RV4 = 'Real Virtuality 4'

/*
https://cryengine.com
*/
var CRY = "CryEngine 1"
var CRY2 = "CryEngine 2"
var CRY3 = "CryEngine 3"
var CRY5 = "CryEngine 5"

/*
https://developer.valvesoftware.com/wiki/Main_Page
*/
var SOURCE = "Source Engine"
var SOURCE2 = "Source Engine 2"

/*
https://aws.amazon.com/de/lumberyard/
*/
var LUMBERYARD = "Lumberyard Engine"

GAMES = [
      {name: 'Dauntless', engine: UNREAL4, releaseDate: {q: 4, y: 2017}, imgId: 'dauntless', yt: 'xOMq_luhZoA'},
      {name: 'Nidhogg', engine: GAME_MAKER1, releaseDate: {d: 13, m: 1, y: 2014}, imgId: 'nidhogg', yt: 'TaOocHXMhlU'},
      {name: 'Yooka-Laylee', engine: UNITY, releaseDate: {d: 11, m: 4, y: 2017}, imgId: 'yooka-laylee', yt: 'R57JwzXartU'},
      {name: 'Stardew Valley', engine: XNA, releaseDate: {d: 26, m: 2, y: 2016}, imgId: 'stardew-valley', yt: 'ot7uXNQskhs'},
      {name: 'Undertale', engine: GAME_MAKER1, releaseDate: {d: 15, m: 9, y: 2015}, imgId: 'undertale', yt: '1Hojv0m3TqA'},
      {name: 'Life is Strange', engine: UNREAL3, releaseDate: {d: 30, m: 1, y: 2015}, imgId: 'life-is-strange', yt: 'YznXuKwJtMg'},
      {name: 'The Forest', engine: UNITY, releaseDate: {d: 30, m: 5, y: 2014}, imgId: 'the-forest', yt: '4qTtVMM3uqQ'},
      {name: 'Star Wars Battlefront', engine: FROSTBITE, releaseDate: {d: 17, m: 11, y: 2011}, imgId: 'battlefront', yt: 'ZwWLns7-xN8'},
      {name: 'Battlefield 3', engine: FROSTBITE, releaseDate: {d: 25, m: 10, y: 2011}, imgId: 'battlefield-3', yt: 'UIUJh2mA8vg'},
      {name: 'Battlefield 4', engine: FROSTBITE, releaseDate: {d: 29, m: 10, y: 2013}, imgId: 'battlefield-4', yt: 'sclTMEd7JN8'},
      {name: 'Battlefield 1', engine: FROSTBITE, releaseDate: {d: 21, m: 10, y: 2016}, imgId: 'battlefield-1', yt: 'c7nRTF2SowQ'},
      {name: 'Crysis 1', engine: CRY, releaseDate: {d: 16, m: 11, y: 2007}, imgId: 'crysis-1', yt: '4YMdZnb2Zyo'},
      {name: 'Crysis 2', engine: CRY3, releaseDate: {d: 22, m: 3, y: 2011}, imgId: 'crysis-2', yt: 'Xa1NvpiwqQk'},
      {name: 'Crysis 3', engine: CRY3, releaseDate: {d: 19, m: 2, y: 2013}, imgId: 'crysis-3', yt: 'ax5qX6HyB-o'},
      {name: 'The Witcher 3', engine: RED_ENGINE, releaseDate: {d: 19, m: 5, y: 2015}, imgId: 'witcher3', yt: 'tDfa1Qp2SwA'},
      {name: 'Super Mario Run', engine: UNITY, releaseDate: {d: 15, m: 12, y: 2016}, imgId: 'mario-run', yt: 'wSL56aLy8BI'},
      {name: 'Minecraft', engine: LWJGL, releaseDate: {d: 17, m: 5, y: 2009}, imgId: 'minecraft', yt: 'MmB9b5njVbA'},
      {name: 'Super Ubie Island', engine: CONSTRUCT2, releaseDate: {d: 15, m: 1, y: 2016}, imgId: 'superubieisland', yt: 'd41yEc3CGoQ'},
      {name: 'The Escapist', engine: CTF, releaseDate: {d: 13, m: 2, y: 2015}, imgId: 'The-Escapists', yt: 'ixeHjuPKlUU'}, // https://community.clickteam.com/content/224-The-Escapists-Kickstarter-Launched
      {name: 'Arma 3', engine: RV4, releaseDate: {d: 12, m: 9, y: 2013}, imgId: 'arma3', yt: 'M1YBZUxMX8g'}, // https://arma3.com/features/engine
      {name: 'Argo', engine: RV4, releaseDate: {d: 22, m: 6, y: 2017}, imgId: 'argo', yt: '459VNYwtuS4'}, // Basiert auf Arma 3
      { name: 'Far Cry 1', engine: CRY, releaseDate: { d: 23, m: 3, y: 2004 }, imgId: 'farcry1', yt: 'axHGJjh1_oU' }, //https://en.wikipedia.org/wiki/Far_Cry
      { name: 'Borderlands 2', engine: UNREAL3, releaseDate: { d: 18, m: 9, y: 2012 }, imgId: 'borland2', yt: '5TW0wJTFLiw' }, //https://en.wikipedia.org/wiki/Borderlands_2
      { name: 'Firewatch', engine: UNITY, releaseDate: { d: 9, m: 2, y: 2016 }, imgId: 'firewatch', yt: 'kZX3MgsRb0A' }, //https://en.wikipedia.org/wiki/Firewatch
      { name: 'Cities: Skylines', engine: UNITY, releaseDate: { d: 10, m: 3, y: 2015 }, imgId: 'skylines', yt: 'CpWe03NhXKs' }, //https://en.wikipedia.org/wiki/Cities:_Skylines
      { name: 'Rocket League', engine: UNREAL3, releaseDate: { d: 7, m: 7, y: 2015 }, imgId: 'rocketl', yt: 'Vawwy2eu5sA' } //https://en.wikipedia.org/wiki/Rocket_League
]
