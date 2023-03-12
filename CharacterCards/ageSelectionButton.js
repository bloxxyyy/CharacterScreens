const ageButton = document.getElementById("button-age-order");
let isAscendingAge = true; // initial sort order is ascending
ageButton.addEventListener('click', function() {
    json["characters"].sort(function(a, b) {
        return a.Age - b.Age;
    });
    if (!isAscendingAge) {
        json["characters"].reverse();
    }
    remakeCards();
    isAscendingAge = !isAscendingAge; // toggle sort order
});