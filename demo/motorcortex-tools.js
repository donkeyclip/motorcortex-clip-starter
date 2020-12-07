import {clip, initParams} from "../clip/clip";
import Player from "@kissmybutton/motorcortex-player";

// get clip's dimensions and apply dimensions to the clip container

(function(){
    const clipContainer = document.getElementById('clip');
    const toolset = document.getElementById('motorcortex-tools');
    const logo = document.getElementById('motorcortex-logo');
    const menu = document.getElementById('menu');

    // set clip container's dimensions
    clipContainer.style.width = clip.props.containerParams.width;
    clipContainer.style.height = clip.props.containerParams.height;

    const player = new Player({clip});

    toolset.addEventListener('mouseenter', ()=>{
        menu.style.transform = "translateX(30%)";
        logo.style.transform = "scale(1)";
        toolset.style.background = "#323232";
        logo.style.background = "#323232";
        logo.style.top = "6px";
        logo.style.paddingBottom = "0px";
    });

    toolset.addEventListener('mouseleave', ()=>{
        menu.style.transform = "translateX(-100%)";
        logo.style.transform = "scale(0.8)";
        toolset.style.background = "#282828";
        logo.style.background = "#282828";
        logo.style.top = "-6px";
        logo.style.paddingBottom = "20px";
    });
})();