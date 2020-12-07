import {clip, initParams} from "../clip/clip";
import Player from "@kissmybutton/motorcortex-player";

const clipContainer = document.getElementById('clip');
const toolset = document.getElementById('motorcortex-tools');
const logo = document.getElementById('motorcortex-logo');
const menu = document.getElementById('menu');

// set clip container's dimensions
clipContainer.style.width = clip.props.containerParams.width;
clipContainer.style.height = clip.props.containerParams.height;

const player = new Player({clip});

