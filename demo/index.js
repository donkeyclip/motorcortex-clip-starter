import {clip, initParamsMap} from "../clip/clip";
import Player from "@kissmybutton/motorcortex-player";

window.parent.postMessage({
    what: 'clipLoaded',
    clipDims: clip.containerParams,
    initParamsMap
}, "*");

let clipContainer = document.getElementById('clip');
// set clip container's dimensions
clipContainer.style.width = clip.props.containerParams.width;
clipContainer.style.height = clip.props.containerParams.height;

new Player({clip});