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

    const cs = document.getElementById("characterScreens");

    if (infoBarHidden) {
        setInfo(screen);
        hideButtons();
        infoBar.style.setProperty("display", "table");
        cs.style.setProperty("grid-template-columns", "repeat(auto-fit, minmax(180px, auto), minmax(180px, auto))");
        hideOtherElements(screen);
        createGrid();
    } else {
        cs.style.setProperty("grid-template-columns", "repeat(auto-fit, minmax(180px, auto))");
        infoBar.style.setProperty("display", "none");
        screen.classList.remove('activeSpot');
        firstElement.classList.add('activeSpot');
        displayButtons();
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
                var genderField = document.getElementById("GenderField");
                genderField.innerHTML = json[item][e]['Gender']
                var statusField = document.getElementById("StatusField");
                statusField.innerHTML = json[item][e]['Status']
                onLoadInfoBarData(namefield);
                onLoadInfoBarData(agefield);
                onLoadInfoBarData(genderField);
                onLoadInfoBarData(statusField);
            }
        }
    }
}