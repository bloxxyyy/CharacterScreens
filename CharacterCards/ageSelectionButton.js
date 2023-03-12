const ageButton = document.getElementById("button-age-order");
ageButton.addEventListener('click', function() {
    json["characters"].sort(function(a, b){
        return a.Age - b.Age;
    });
    json["characters"].reverse();
    remakeCards();
});
