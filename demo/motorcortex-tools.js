import {clip, initParamsMap} from "../clip/clip";
import Player from "@kissmybutton/motorcortex-player";

import CodeFlask from 'codeflask';

const isLoggedIn = false;

const clipContainer = document.getElementById('clip');
const toolset = document.getElementById('motorcortex-tools');
const editor = document.getElementById('json-editor');
const closeEditor = document.getElementById('cancel-init-params');
const saveParams = document.getElementById('save-init-params');
const initParamsSetButton = document.getElementById('set-init-params');

let initParamsOpen = false;
function toggleInitParams(save = false){
    if(initParamsSetButton.classList.contains('disabled')){
        return ;
    }
    editor.classList.toggle('open');
    initParamsOpen = !initParamsOpen;
    if(initParamsOpen){
        const editorTextArea = document.querySelector('.codeflask__textarea');
        editorTextArea.focus();
    }
}

initParamsSetButton.addEventListener('click', event => {
    toggleInitParams();   
});
closeEditor.addEventListener('click', event => {
    toggleInitParams();   
});
saveParams.addEventListener('click', event => {
    toggleInitParams();   
});

// set clip container's dimensions
clipContainer.style.width = clip.props.containerParams.width;
clipContainer.style.height = clip.props.containerParams.height;

const player = new Player({clip});

if(!isLoggedIn){
    toolset.classList.add('not-loggedin');
}

if(!initParamsMap){
    initParamsSetButton.classList.add('disabled');
} else {
    const flask = new CodeFlask('#editor', { 
        language: 'js',
        lineNumbers: false,
        defaultTheme: false
    });
    const jsonTextArea = document.querySelector('textarea');
    jsonTextArea.addEventListener('keydown', event => {
        if(event.key === "i" && (event.ctrlKey || event.metaKey)){
            toggleInitParams();
            event.preventDefault();
            event.stopImmediatePropagation();
            return;
        }        
        if(event.key === "s" && (event.ctrlKey || event.metaKey)){
            toggleInitParams(true);
            event.preventDefault();
            event.stopImmediatePropagation();
            return ;
        }
    });
}


/*********** HOTKEYS SETUP ************/
import hotkeys from 'hotkeys-js';

if (window.navigator.userAgent.indexOf("Mac") != -1){
    toolset.classList.add('mac');

    hotkeys('command+i', function (event, handler){
        event.preventDefault();
        switch (handler.key) {
            case 'command+i': 
                toggleInitParams();
                break;
        }
    });
} else {
    hotkeys('ctrl+i', function (event, handler){
        event.preventDefault();
        switch (handler.key) {
            case 'ctrl+i': 
                toggleInitParams();
                break;
        }
    });
}
