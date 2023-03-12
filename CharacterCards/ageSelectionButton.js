const ageButton = document.getElementById("button-age-order");
let isAscendingAge = true; // initial sort order is ascending
ageButton.addEventListener('click', function() {
    json["characters"].sort(function(a, b) {
        return a.Age - b.Age;
    });
    if (!isAscendingAge) {
        json["characters"].reverse();
        buildPopup("Sorted by Age: Asending");
    } else {
        buildPopup("Sorted by Age: Decending");
    }

    remakeCards();
    isAscendingAge = !isAscendingAge; // toggle sort order
});