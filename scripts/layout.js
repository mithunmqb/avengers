import {loadHeader, loadFooter} from "./headerfooter.js"
import {loadLogo} from "./logo.js"
import {loadNavigationItems} from "./navigation.js"

function loadCommonLayoutElements(commonContentsURL) {

    fetch(commonContentsURL)
    .then(function(response) {
        return response.json();})
    .then(function(commonLayoutData) {
        loadHeader(commonLayoutData.header);
        loadLogo(commonLayoutData.mainLogo);
        loadNavigationItems(commonLayoutData.nav);
        loadFooter(commonLayoutData.footer);
    })
    .catch(function(error){
        console.log(error);
    })
}

export {loadCommonLayoutElements};