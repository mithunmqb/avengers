import {loadHeader, loadFooter} from "./headerfooter"
import {loadLogo} from "./logo"
import {loadNavigationItems} from "./navigation"

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