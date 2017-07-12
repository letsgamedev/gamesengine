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
var FROSTBITE = 'Frostbite'
var OWN_ENGINE = 'Own Engine'
var PHASERJS = 'Phaser.js'
var COCOS2D = 'Cocos2D'
var RED_ENGINE = 'REDengine 2/3/4'
var CREATION_ENGINE = 'Creation-Engine' //https://en.wikipedia.org/wiki/Creation_Engine

GAMES = [
      {name: 'Dauntless', engine: UNREAL4, releaseDate: {q: 4, y: 2017}, imgId: 'dauntless', yt: 'xOMq_luhZoA'},
      {name: 'Nidhogg', engine: GAME_MAKER1, releaseDate: {d: 13, m: 1, y: 2014}, imgId: 'nidhogg', yt: 'TaOocHXMhlU'},
      {name: 'Yooka-Laylee', engine: UNITY, releaseDate: {d: 11, m: 4, y: 2017}, imgId: 'yooka-laylee', yt: 'R57JwzXartU'},
      {name: 'Stardew Valley', engine: XNA, releaseDate: {d: 26, m: 2, y: 2016}, imgId: 'stardew-valley', yt: 'ot7uXNQskhs'},
      {name: 'Undertale', engine: GAME_MAKER1, releaseDate: {d: 15, m: 9, y: 2015}, imgId: 'undertale', yt: '1Hojv0m3TqA'},
      {name: 'Life is Strange', engine: UNREAL3, releaseDate: {d: 30, m: 1, y: 2015}, imgId: 'life-is-strange', yt: 'YznXuKwJtMg'},
      {name: 'The Forest', engine: UNITY, releaseDate: {d: 30, m: 5, y: 2014}, imgId: 'the-forest', yt: '4qTtVMM3uqQ'},
      {name: 'The Witcher 3', engine: RED_ENGINE, releaseDate: {d: 19, m: 5, y: 2015}, imgId: 'witcher3', yt: 'tDfa1Qp2SwA'},
      {name: 'Deus Ex GO', engine: UNITY, releaseDate: {d: 18, m: 8, y: 2016}, imgId: 'dxgo', yt: 'TbvVA1yeSUA'}, // Quelle -> https://madewith.unity.com/en/games/deus-ex-go
      {name: 'Superhot', engine: UNITY, releaseDate: {d: 25, m: 2, y: 2016}, imgId: 'superhot', yt: 'JYAUlPMqnKk'}, // Quelle -> https://madewith.unity.com/en/games/superhot
      {name: 'Hearthstone: Heroes of Warcraft', engine: UNITY, releaseDate: {d: 11, m: 3, y: 2014}, imgId: 'hearthstone', yt: '4y1-wBdkKfA'}, // Quelle -> https://de.wikipedia.org/wiki/Hearthstone:_Heroes_of_Warcraft
      {name: 'The Elder Scrolls V: Skyrim', engine: CREATION_ENGINE, releaseDate: {d: 11, m: 11, y: 2011}, imgId: 'skyrim', yt: 'JSRtYpNRoN0'}, // Quelle -> https://de.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim
      {name: 'Fallout 4', engine: CREATION_ENGINE, releaseDate: {d: 10, m: 11, y: 2015}, imgId: 'fallout4', yt: 'GE2BkLqMef4'}, // Quelle -> https://en.wikipedia.org/wiki/Fallout_4
]