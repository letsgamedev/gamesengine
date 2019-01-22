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

    data: function() {
        var sortOrders = {}
        this.head.forEach(function(key) {
            sortOrders[key] = 1
        })
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },

    methods: {
        sortBy: function(key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        }
    },

    computed: {
        filteredData: function() {
            var sortKey = this.sortKey.toLowerCase() || 'name'
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[this.sortKey] || 1
            var data = this.data
            setAllButtonDisabled(!filterKey)
            if (filterKey) {
                data = data.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        if (key === 'releaseDate') {
                            return generateDateFormat(row[key]).indexOf(filterKey) > -1
                        } else {
                            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        }
                    })
                })
            }
            var alphaSort = function(a, b) {
                a = a[sortKey]
                b = b[sortKey]
                return (a === b ? 0 : a > b ? 1 : -1) * order
            }

            var dateSort = function(a, b) {
                var trans = function(date) {
                    var d = 0
                    var m = 0
                    var y = 0
                    if (date.hasOwnProperty('q')) {
                        d = 31
                        switch (date.q) {
                            case '1':
                                m = 3;
                                break
                            case '2':
                                m = 6;
                                break
                            case '3':
                                m = 9;
                                break
                            case '4':
                                m = 12;
                                break
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
                case 'release':
                    data = data.slice().sort(dateSort);
                    break
                case 'screen shot':
                    data = data;
                    break
                default:
                    data = data.slice().sort(alphaSort)
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
    <td><engine-link :engine=engine></engine-link></td>
    <td>{{generateDateFormat(releaseDate)}}</td>
    <td><a :href="'https://www.youtube.com/watch?v='+yt" target="_blank"><i class="fa fa-youtube-play fa-6" aria-hidden="true"></i></a></td>
    </tr>
  `,

    methods: {
        generateDateFormat(date) {
            return generateDateFormat(date)
        },
        openImg(src) {
            return 'setImageModal(true,"' + src + '")'
        }
    }
})

Vue.component('engine-link', {
    props: ['engine'],
    template: `
    <div>
    <div v-if="engine.length == null"><span v-for="(value, key) in engine"><a :href=value[1] target="_blank">{{value[0]}} ({{key}})</a> <i @click="search(value[0])" class="fa fa-search fa-1 engineSearchIcon"></i><br></span></div>
    <span v-else><a :href=engine[1] target="_blank">{{engine[0]}}</a> <i @click="search(engine[0])" class="fa fa-search fa-1 engineSearchIcon"></i></span>
    </div>
`,

    methods: {
        search: function(s) {
            console.log("ji", s, this.engine)
            this.$root.searchQuery = s ? s : this.engine[0]
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

    methods: {}
})

var app = new Vue({
    el: '#root',
    data: {
        l: {
            de: {
                gamesInstruction: 'Welches Spiel wurde mit welcher Engine entwickelt?',
                engines: 'Eine Übersicht kleiner und großer Game Engines',
                learn: 'Tutorials, Bücher und Videokurse',
                home: 'Home',
                secGames: {
                  wellcome: "Mit welcher Engine entwickelt?",
                  text1: "Vielen Spielen sieht man nicht an, wie sie entwickelt wurden. Und eigentlich ist das auch gar nicht wichtig für dich als Spieler. Aber vielleicht bist du neugierig und willst wissen, welches Spiel mit welcher Engine entwickelt wurde. Darum habe ich hier eine Liste von Spielen zusammengestellt, die du durchstöbern kannst."
                },
                secHome: {
                    wellcome: "Auf geht's! Spiele programmieren!",
                    text1: "Du hast Lust selbst ein Spiel zu programmieren? Dann bist du hier genau richtig. Auf lets-gamedev.de wirst du alle wichtigen Infomrationen finden, die dir helfen werden mit der Spieleentwicklung zu beginnen."
                },
                secEngines: {
                    wellcome: "Game Engines",
                    text1: "Wer die Wahl hat, hat die Qual. Welche Engine ist für dein Spielprojekt oder für dich als Entwickler geeignet? Eine ultimative Antwort kann es darauf nicht geben. Darum stelle ich dir hier die momentan wichtigsten Engine und Bibliotheken vor die wirklich relevant sind."
                },
                secLearn: {
                    wellcome: "Learning by doing!",
                    text1: "Du hast dir deine Wunschengine rausgesucht und suchst nun nach den richtigen Quellen um zu lernen wie du damit umgehst? Oder du suchst allgemeine tolle Infos über das Programmieren. Das alles wirst du hier finden."
                }
            },

            en: {
                gamesIinstruction: 'The the the english the they cool.'
            }
        },

        searchQuery: '',

        head: ['Name', 'Screen Shot', 'Engine', 'Release', '<span class="icon"><i class="fa fa-youtube-play"></i></span>'],

        games: GAMES
    }
})

function setImageModal(toOn, src) {
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

function generateDateFormat(v) {
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