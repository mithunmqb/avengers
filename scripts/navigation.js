function loadNavigationItems(navData) {

    var html = "";
    var navItem = {};
    for (var i = 0; i < navData.length; i++) {
        navItem = navData[i];
        html += "<div> <a href=\"" + navItem.link + "\">" + navItem.title + "</a> </div>";
    }
    document.getElementById("nav").innerHTML = html;
}

export {loadNavigationItems};