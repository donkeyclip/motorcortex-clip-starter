import {clip, initParamsMap} from "../clip/clip";
import Player from "@kissmybutton/motorcortex-player";
import initParamsApply from './scripts/initParamsApply';
import {utils} from '@kissmybutton/motorcortex';

const liveDef = clip.exportLiveDefinition();
liveDef.props.id = clip.id;

const clipDef = clip.exportDefinition();
window.top.postMessage({
    what: 'clipLoaded',
    clipDims: clip.props.containerParams,
    initParamsMap,
    clipDef: JSON.parse(JSON.stringify(clipDef))
}, "*");

window.addEventListener('message', (event)=>{
    if(event.data.what === "initParamsChange"){
        const newLiveDef = initParamsApply(liveDef, initParamsMap, event.data.initParams);
        document.getElementById("projector").innerHTML = "<div id='clip'></div>";
        const clipContainer = document.getElementById('clip');
        // set clip container's dimensions
        clipContainer.style.width = clip.props.containerParams.width;
        clipContainer.style.height = clip.props.containerParams.height;
        newLiveDef.props.host = clipContainer;
        const newclip = utils.clipFromDefinition(newLiveDef);
        new Player({clip: newclip});
    }
});

let clipContainer = document.getElementById('clip');
// set clip container's dimensions
clipContainer.style.width = clip.props.containerParams.width;
clipContainer.style.height = clip.props.containerParams.height;

new Player({clip});