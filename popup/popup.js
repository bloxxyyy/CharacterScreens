function buildPopup(t) {

    var text = document.createElement("span");
    text.setAttribute('class', 'popupTextSpan');
    var node = document.createTextNode(t);
    text.appendChild(node);

    var popupWindow = document.createElement("div");
    popupWindow.setAttribute('class', 'popupWindow');
    popupWindow.appendChild(text);

    document.body.appendChild(popupWindow);
    setTimeout(function() {
        popupWindow.parentNode.removeChild(popupWindow);
    }, 5000);
}