import {clip, initParamsMap} from "../clip/clip";
import Player from "@kissmybutton/motorcortex-player";

const isLoggedIn = true;

const clipContainer = document.getElementById('clip');
const toolset = document.getElementById('motorcortex-tools');
// const logo = document.getElementById('motorcortex-logo');
// const menu = document.getElementById('menu');
const initParamsSetButton = document.getElementById('set-init-params');

// set clip container's dimensions
clipContainer.style.width = clip.props.containerParams.width;
clipContainer.style.height = clip.props.containerParams.height;

const player = new Player({clip});

if(!isLoggedIn){
    toolset.classList.add('not-loggedin');
}

if(!initParamsMap){
    initParamsSetButton.classList.add('disabled');
}

