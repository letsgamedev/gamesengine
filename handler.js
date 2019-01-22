 var tabNames = ["home", "games", "engines", "learn"]
var tabContainer = {}

window.onload = function() {
		tabNames.forEach(name => tabContainer[name] = document.getElementById(name))
    showCorrectTab()
}

function onBurger() {
    document.getElementById("burger").classList.toggle('is-active')
    document.getElementById("mainNavBar").classList.toggle('is-active')
}

function swapTab(goal) {
    history.pushState({}, "lets-gamedev.de", "?tab=" + goal);
    showCorrectTab()
}

function showCorrectTab() {
    var activeTab = getParam("tab")
    if (activeTab == null) {
    	swapTab("home")
    	return
    }

  	tabNames.forEach(name => showDomElement(tabContainer[name], activeTab === name))
}

function showDomElement(element, show) {
	element.classList.remove(show ? "hide" : "show")
	element.classList.add(show ? "show" : "hide")
}

function getParam(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }

    return null
}