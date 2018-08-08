var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
var url = "./scripts/contents.json";

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = JSON.parse(xhr.responseText);
        loadContents(jsonData);
    }
};

xhr.open("GET", url, true);
xhr.send();

function loadContents(data) {

    if (data.headerLogo != undefined) {
        loadHeader(data.headerLogo)
    }
    if (data.mainLogo != undefined) {
        loadLogo(data.mainLogo)
    }
    if (data.nav != undefined) {
        loadNavigationItems(data.nav)
    }
    if (data.content != undefined) {
        loadSuperHeroes(data.content)
    }
}

function loadHeader(headerData) {

    var html = "<a href= \"" + headerData.link + "\"> <img src=\"" + headerData.src + "\" alt=\"" + headerData.alt + "\">";
    document.getElementById("header").innerHTML = html;
}
function loadLogo(logoData) {
    var html = "<img src=\"" + logoData.src + "\" alt=\"" + logoData.alt + "\">";
    document.getElementById("logo").innerHTML = html;
}
function loadNavigationItems(navData) {

    var html = "";
    var navItem = {};
    for (var i = 0; i < navData.length; i++) {
        navItem = navData[i];
        html += "<div> <a href=\"" + navItem.link + "\">" + navItem.title + "</a> </div>";
    }
    document.getElementById("nav").innerHTML = html;
}

function loadSuperHeroes(superHeroData) {
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

function validateForm() {

    let form = document.forms["register"];
    var name = form["name"].value;
    if(value === "") {
        alert("Name cannot be empty")
        return false;
    }   
    var email = form["email"].value;
    if (validateEmail(email) != true) {
        alert("Please enter a valid email address");
        return false;
    } 

    var alias = form["alias"].value;
    if(alias === "") {
        alert("Alias cannot be empty");
        return false;
    }

    var gender = form["gender"];
    var genderSelected = false; 
    for(var i = 0; i < gender.length; i++) {
        if (gender[i].checked === true) {
            genderSelected = true;
        }
    }
    if(genderSelected === false) {
        alert("Please select your gender")
        return false;
    }
}

function validateEmail(email) 
{
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
}