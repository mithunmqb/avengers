function loadLogo(logoData) {
    
    var html = `<img src="${logoData.src}" alt= "${logoData.alt}">`;
    //var html = "<img src=\"" + logoData.src + "\" alt=\"" + logoData.alt + "\">";
    document.getElementById(`logo`).innerHTML = html;
}

export {loadLogo};