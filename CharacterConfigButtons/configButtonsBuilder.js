const buttonData = '{"buttons":[["name", true], ["age", true]]}';
var buttonJson = JSON.parse(buttonData);
var buttonElements = [];

function createConfigButtons() {
    for (let item in buttonJson) {
        for (let data in buttonJson[item]) {
            buildConfigButton(buttonJson[item][data]);
        }
    }
}

function buildConfigButton(jsonItem) {
    
    var configButtonsContainer = document.getElementsByClassName("character-buttons-container")[0]
    var div = document.createElement("div");
    div.setAttribute('class', 'character-buttons');
    div.setAttribute('id', 'button-'+jsonItem[0]+'-order');

    if (jsonItem[0] === "age") {
        var ev = function() {
            json["characters"].sort(function(a, b) {
                return a.Age - b.Age;
            });
            if (!jsonItem[1]) {
                json["characters"].reverse();
                buildPopup("Sorted by Age: Asending");
            } else {
                buildPopup("Sorted by Age: Decending");
            }
        
            remakeCards();
            jsonItem[1] = !jsonItem[1]; // toggle sort order        
        };
    }

    if (jsonItem[0] === "name") {
        var ev = function() {
            json["characters"].sort(function(a, b) {
                return a.Name.localeCompare(b.Name);
            });
            if (!jsonItem[1]) {
                json["characters"].reverse();
                buildPopup("Sorted by Name: Asending");
            } else {
                buildPopup("Sorted by Name: Decending");
            }
            remakeCards();
            jsonItem[1] = !jsonItem[1]; // toggle sort order
        }
    }


    div.addEventListener('click', ev);  
    buttonElements.push(div);
    configButtonsContainer.appendChild(div);
}

function hideButtons() {
    for (let item in buttonElements) {
        buttonElements[item].style.setProperty("display", "none");
    }
}

function displayButtons() {
    for (let item in buttonElements) {
        buttonElements[item].style.setProperty("display", "block");
    }
}

createConfigButtons(); // initial setup