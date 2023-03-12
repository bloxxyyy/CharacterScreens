var infoBar = document.getElementById("infoBar");
var infoBarHidden = true;
const collection = document.getElementsByClassName("screen");

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

function toggleShowCharacterInfo(screen) {
    var element = document.getElementsByClassName("activeSpot")[0];

    element.classList.remove('activeSpot');
    screen.classList.add('activeSpot');

    if (infoBarHidden) {
        setInfo(screen);
        infoBar.style.setProperty("display", "block");
        hideOtherElements(screen);
        createGrid();
    } else {
        infoBar.style.setProperty("display", "none");
        screen.classList.remove('activeSpot');
        firstElement.classList.add('activeSpot');
        displayAllElements();
        createGrid();
    }

    infoBarHidden = !infoBarHidden;
}

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