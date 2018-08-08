import {loadCommonLayoutElements} from "./layout"
import {loadSuperHeros} from "./super-heros"

const commonContentsURL = "./scripts/common-contents.json";
const superHerosURL = "./scripts/super-heros.json";

loadCommonLayoutElements(commonContentsURL);
loadSuperHeros(superHerosURL);