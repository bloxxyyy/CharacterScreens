const data = '{"characters": [{"Id": "char1","Name": "Marie","Age": "28","Image": "screen1"},{"Id": "char2","Name": "Altair","Age": "32","Image": "screen2"},{"Id": "char3","Name": "Yui","Age": "23","Image": "screen3"},{"Id": "char4","Name": "Lucifer","Age": "9999999","Image": "screen4"}]}';
var json = JSON.parse(data);

function remakeCards() {
    removeOldCards();
    CreateCharacterCards();
    firstElement = SetFirstScreen();
}

function removeOldCards() {
    var characterScreens = document.getElementById("characterScreens");
    for (var i = characterScreens.children.length - 1; i >= 0; i--) {
        var tableChild = characterScreens.children[i];
        if (tableChild.classList.contains("screen")) {
            characterScreens.removeChild(tableChild);
        }
    }
}

function SetFirstScreen() {
    var screensList = document.getElementById("characterScreens");
    screensList.children[0].classList.add('activeSpot');
    return screensList.getElementsByClassName("activeSpot")[0];
}

function CreateCharacterCards() {
    for (let item in json) {
        for (let e in json[item]) {
            buildScreen(json[item][e]);
        }
    }
}

function buildScreen(e) {
    var characterScreens = document.getElementById("characterScreens");
    
    var text = document.createElement("span");
    text.setAttribute('class', 'name');
    text.innerHTML = e['Name'];

    var textScreen = document.createElement("div");
    textScreen.setAttribute('class', 'screen-text');
    textScreen.appendChild(text);

    var overlay = document.createElement("div");
    overlay.setAttribute('class', 'screen-overlay');

    var image = document.createElement("div");
    image.setAttribute('class', e['Image']);

    var screen = document.createElement("div");
    screen.setAttribute('class', 'screen');
    screen.setAttribute('id', e['Id']);
    screen.appendChild(image);
    screen.appendChild(overlay);
    screen.appendChild(textScreen);

    screen.addEventListener('click', function() {
        toggleShowCharacterInfo(screen);
    });

    characterScreens.insertBefore(screen, characterScreens.firstChild);
}

remakeCards(); // initial setup
