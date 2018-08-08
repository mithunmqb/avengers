function loadSuperHeros(superHerosURL) {

    fetch(superHerosURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(superHerosJSON) {
        loadSuperHeroCards(superHerosJSON.content);
    })
    .catch(function(error){
        console.log(error);
    })
}

function loadSuperHeroCards(superHeroData) {
    var html = "";
    var cardClass = "card";
    var cardImageClass = "card-image";
     superHeroData.forEach(function (card) {
        html += "<article class=\"" + cardClass + "\">" +
                "<div class = \"card-image\">" + 
                    "<img src=\"" + card.image + "\" alt=\"icon\">" +
                "</div>" +
                "<p>" + card.text + "</p>" +
                "</article>";
    });
    document.getElementById("cards").innerHTML = html;
}

export {loadSuperHeros};