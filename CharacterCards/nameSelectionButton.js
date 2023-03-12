const nameButton = document.getElementById("button-name-order");
let isAscendingName = true; // initial sort order is ascending
nameButton.addEventListener('click', function() {
    json["characters"].sort(function(a, b) {
        return a.Name.localeCompare(b.Name);
    });
    if (!isAscendingName) {
        json["characters"].reverse();
    }
    remakeCards();
    isAscendingName = !isAscendingName; // toggle sort order
});