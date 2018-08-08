import {loadCommonLayoutElements} from "./layout.js"
import {loadSuperHeros} from "./super-heros.js"

const commonContentsURL = "./scripts/common-contents.json";
const superHerosURL = "./scripts/super-heros.json";

loadCommonLayoutElements(commonContentsURL);
loadSuperHeros(superHerosURL);