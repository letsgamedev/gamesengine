
Vue.component('game-table', {
  props: ['data', 'head'],
  template: `
  <table class="table">
        <thead><tr>
          <th v-for="key in head" v-html="key"></th>
        </tr></thead>
        <tbody>
            <table-entry v-for="entry in data" 
            :name="entry.name" 
            :engine="entry.engine" 
            :releaseDate="entry.releaseDate" 
            :imgId="entry.imgId"
            :yt="entry.yt">
            </table-entry>
        </tbody>
      </table>
        `,

  methods: {
  }
})

Vue.component('table-entry', {
  props: ['name', 'engine', 'releaseDate', 'imgId', 'yt'],
  template: `<tr>
    <td>{{name}}</td>
    <td><img :src="'img/' + imgId + '.jpg'" class="screenshot" :onClick="openImg(imgId)"/></td>
    <td><engine-link :name=engine></engine-link></td>
    <td>{{generateDateFormat(releaseDate)}}</td>
    <td><a :href="'https://www.youtube.com/watch?v='+yt" target="_blank"><i class="fa fa-youtube-play fa-6" aria-hidden="true"></i></a></td>
    </tr>
  `,

  methods: {

    openImg (src) {
      return 'setImageModal(true,' + src + ')'
    },

    generateDateFormat (v) {
      if (v.hasOwnProperty('q')) {
        return 'Q' + v.q + ' ' + v.y
      } else {
        var d = v.d < 10 ? '0' + v.d : v.d
        var m = v.m < 10 ? '0' + v.m : v.m
        var y = v.y
        return d + '.' + m + '.' + y
      }
    }
  }
})

Vue.component('engine-link', {
  props: ['name'],
  template: `
    <a :href=getLink(name) target="_blank">{{name}}</a>
  `,

  methods: {
    getLink (v) {
      switch (v) {
        case UNITY: return 'https://unity3d.com'
        case UNREAL4: return 'https://www.unrealengine.com/what-is-unreal-engine-4'
        case XNA: return 'https://en.wikipedia.org/wiki/Microsoft_XNA'
        case GAME_MAKER1: return 'https://www.yoyogames.com/'
        case GAME_MAKER2: return 'https://www.yoyogames.com/'
        case GODOT: return 'https://godotengine.org/'
        case FROSTBITE: return 'https://www.ea.com/frostbite'
        case OWN_ENGINE: return ''
        case PHASERJS: return 'https://phaser.io/'
        case COCOS2D: return 'http://cocos2d.org/'

        default: return 'http://lets-gamedev.de/help/'
      }
    }
  }
})

Vue.component('image-modal', {
  props: [],
  template: `
    <div id="imgModal" class="modal">
      <div class="modal-background" onClick="setImageModal(false)"></div>
      <div class="modal-content">
        <img src="img"/>
      </div>
      <button class="modal-close is-large" onClick="setImageModal(false)"></button>
    </div>
  `,

  methods: {
  }
})

var app = new Vue({
  el: '#root',
  data: {
    l: {
      de: {
        instruction: 'Welches Spiel wurde mit welcher Engine entwickelt?'
      },

      en: {
        instruction: 'The the the english the they cool.'
      }
    },

    head: ['Name', 'Screen Shot', 'Engine', 'Release', '<span class="icon"><i class="fa fa-youtube-play"></i></span>'],

    games: GAMES
  }
})

function setImageModal (toOn, src) {
  var modal = document.getElementById('imgModal')
  var img = modal.getElementsByTagName('img')[0]
  if (toOn) {
    modal.className = 'modal is-active'
    img.src = 'img/' + src + '.jpg'
  } else {
    modal.className = 'modal'
  }
}
