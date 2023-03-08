const data = '{"characters": [{"Id": "char1","Name": "Marie","Age": "28","Image": "screen1"},{"Id": "char2","Name": "Altair","Age": "32","Image": "screen2"},{"Id": "char3","Name": "Yui","Age": "23","Image": "screen3"},{"Id": "char4","Name": "Ichika","Age": "34","Image": "screen4"}]}';

window.onload = function() {

    const json = JSON.parse(data);
    CreateCharacterCards();
    var firstElement = SetFirstScreen();

    var infoBar = document.getElementById("infoBar");
    var infoBarHidden = true;
    const collection = document.getElementsByClassName("screen");

    document.querySelectorAll('.screen').forEach(function(el) {
        el.addEventListener('click', function() {
            var element = document.getElementsByClassName("activeSpot")[0];

            element.classList.remove('activeSpot');
            el.classList.add('activeSpot');

            if (infoBarHidden) {
                setInfo(el);
                infoBar.style.setProperty("display", "block");
                hideOtherElements(el);
            } else {
                infoBar.style.setProperty("display", "none");
                el.classList.remove('activeSpot');
                firstElement.classList.add('activeSpot');
                displayAllElements();
            }
            infoBarHidden = !infoBarHidden;
        });
    });

    function setInfo(el) {
        var id = el.id

        for (let item in json) {
            for (let e in json[item]) {
                if (json[item][e]['Id'] == id) {
                    var namefield = document.getElementById("NameField");
                    namefield.innerHTML = json[item][e]['Name']
                    var agefield = document.getElementById("AgeField");
                    agefield.innerHTML = json[item][e]['Age']
                }
            }
        }
    }

    function hideOtherElements(el) {
        Array.prototype.forEach.call(collection, function(element) {
            if (element !== el) element.style.setProperty("display", "none");
        });
    }
    
    function displayAllElements(el) {
        Array.prototype.forEach.call(collection, function(element) {
            element.style.setProperty("display", "block");
        });
    }

    function CreateCharacterCards() {
        for (let item in json) {
            for (let e in json[item]) {
                buildScreen(json[item][e]);
            }
        }
    }

    function SetFirstScreen() {
        var screensList = document.getElementById("characterScreens");
        screensList.children[1].classList.add('activeSpot');
        // when we want to back to the character selector reset the spot to Marie.
        return screensList.getElementsByClassName("activeSpot")[0];
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

        characterScreens.insertBefore(screen, characterScreens.firstChild);
    }
}
