
Vue.component('game-table', {
  props: ['data', 'head', 'filterKey'],
  template: `
  <table class="table">
        <thead><tr>
          <th v-for="key in head" @click="sortBy(key)" :class="{active: sortKey == key}" v-html="key"></th>
        </tr></thead>
        <tbody>
            <table-entry v-for="entry in filteredData" 
            :name="entry.name" 
            :engine="entry.engine" 
            :releaseDate="entry.releaseDate" 
            :imgId="entry.imgId"
            :yt="entry.yt">
            </table-entry>
        </tbody>
      </table>
        `,

  data: function () {
    var sortOrders = {}
    this.head.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },

  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  },

  computed: {
    filteredData: function () {
      var sortKey = this.sortKey.toLowerCase() || 'name'
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[this.sortKey] || 1
      var data = this.data
      setAllButtonDisabled(!filterKey)
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            if (key === "releaseDate") {
              return generateDateFormat(row[key]).indexOf(filterKey) > -1
            } else {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            }
            
          })
        })
      } 
      var alphaSort = function (a, b) {
        a = a[sortKey]
        b = b[sortKey]
        return (a === b ? 0 : a > b ? 1 : -1) * order
      }

      var dateSort = function (a, b) {
        var trans = function (date) {
          var d = 0
          var m = 0
          var y = 0
          if (date.hasOwnProperty('q')) {
            d = 31
            switch (date.q) {
              case '1': m = 3; break
              case '2': m = 6; break
              case '3': m = 9; break
              case '4': m = 12; break
            }
            y = date.y
          } else {
            d = date.d
            m = date.m
            y = date.y
          }

          return '' + y + (m < 10 ? '0' + m : m) + (d < 10 ? '0' + d : d)
        }
        var at = trans(a.releaseDate)
        var bt = trans(b.releaseDate)
        console.log(at, bt)
        return (at === bt ? 0 : at > bt ? 1 : -1) * order
      }

      switch (sortKey) {
        case 'release': data = data.slice().sort(dateSort); break
        case 'screen shot': data = data; break
        default: data = data.slice().sort(alphaSort)
      }
      return data
    }
  }
})

Vue.component('table-entry', {
  props: ['name', 'engine', 'releaseDate', 'imgId', 'yt'],
  template: `<tr>
    <td>{{name}}</td>
    <td><img :src="'img/small/' + imgId + '.jpg'" class="screenshot" :onClick="openImg(imgId)"/></td>
    <td><engine-link :name=engine></engine-link></td>
    <td>{{generateDateFormat(releaseDate)}}</td>
    <td><a :href="'https://www.youtube.com/watch?v='+yt" target="_blank"><i class="fa fa-youtube-play fa-6" aria-hidden="true"></i></a></td>
    </tr>
  `,

  methods: {

    openImg (src) {
      return 'setImageModal(true,"' + src + '")'
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
        case UNREAL3: return 'https://www.unrealengine.com/what-is-unreal-engine-4'
        case XNA: return 'https://en.wikipedia.org/wiki/Microsoft_XNA'
        case GAME_MAKER1: return 'https://www.yoyogames.com/'
        case GAME_MAKER2: return 'https://www.yoyogames.com/'
        case GODOT: return 'https://godotengine.org/'
        case FROSTBITE: return 'https://www.ea.com/frostbite'
        case OWN_ENGINE: return ''
        case PHASERJS: return 'https://phaser.io/'
        case COCOS2D: return 'http://cocos2d.org/'
        case RED_ENGINE: return 'https://en.wikipedia.org/wiki/REDengine'
        case LWJGL: return 'https://www.lwjgl.org/'
        case CONSTRUCT2: return 'https://www.scirra.com/'
        case CTF: return 'http://www.clickteam.com/clickteam-fusion-2-5'
        case RV4: return 'https://arma3.com/features/engine'
        case CRYENGINE1: return 'https://www.cryengine.com/'
        case CRYENGINE2: return 'https://www.cryengine.com/'
        case CRYENGINE3: return 'https://www.cryengine.com/'
        case CRYENGINEV: return 'https://www.cryengine.com/'
        case SOURCE: return 'https://de.wikipedia.org/wiki/Source_Engine'
        case SERIOUS4: return 'http://www.croteam.com/technology/'
        case LIBGDX: return 'https://libgdx.badlogicgames.com/'
        case MONOGAME: return 'http://www.monogame.net/'
        case LUMBERYARD: return 'https://aws.amazon.com/de/lumberyard/'
        case CREATION_ENGINE: return 'https://en.wikipedia.org/wiki/Creation_Engine'
        case MADNESS: return 'http://www.slightlymadstudios.com/tech.html'
        case J_MONKEY_ENGINE: return 'http://jmonkeyengine.org/'
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

    searchQuery: '',

    head: ['Name', 'Screen Shot', 'Engine', 'Release', '<span class="icon"><i class="fa fa-youtube-play"></i></span>'],

    games: GAMES
  }
})

function setImageModal (toOn, src) {
  var modal = document.getElementById('imgModal')
  var img = modal.getElementsByTagName('img')[0]
  if (toOn) {
    console.log(src)
    modal.className = 'modal is-active'
    img.src = 'img/full/' + src + '.jpg'
  } else {
    modal.className = 'modal'
  }
}

function setAllButtonDisabled(isDisabled) {
  document.getElementById('all-button').disabled = isDisabled
}

function generateDateFormat (v) {
  if (v.hasOwnProperty('q')) {
    return 'Q' + v.q + ' ' + v.y
  } else {
    var d = v.d < 10 ? '0' + v.d : v.d
    var m = v.m < 10 ? '0' + v.m : v.m
    var y = v.y
    return d + '.' + m + '.' + y
  }
}

function seeAllGames() {
  app.searchQuery = ''
}
