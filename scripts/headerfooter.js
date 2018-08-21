function loadHeader(headerData) {

    var html = `<a href="${headerData.link}"> <img src="${headerData.src}" alt="${headerData.alt}" >`
    //var html = "<a href= \"" + headerData.link + "\"> <img src=\"" + headerData.src + "\" alt=\"" + headerData.alt + "\">";
    document.getElementById("header").innerHTML = html;
}

function loadFooter(footerData) {

    var html = `<footer> <p>${footerData.text}</p> </footer>`;
    // var html = "<footer> <p>" + footerData.text + "</p> </footer>";
    document.getElementById(`footer`).innerHTML = html;
}

export {loadHeader, loadFooter};