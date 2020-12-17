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

initParamsSetButton.addEventListener('click', event => {
    if(initParamsSetButton.classList.contains('disabled')){
        return ;
    }
    editor.classList.toggle('open');
    const editorTextArea = document.querySelector('.codeflask__textarea');
    editorTextArea.focus();
});
closeEditor.addEventListener('click', event => {
    editor.classList.toggle('open');
});
saveParams.addEventListener('click', event => {
    editor.classList.toggle('open');
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
        console.log('x');
        event.preventDefault();
        event.stopImmediatePropagation();
        editor.classList.toggle('open');
    });
}


/*********** HOTKEYS SETUP ************/
import hotkeys from 'hotkeys-js';

if (window.navigator.userAgent.indexOf("Mac") != -1){
    toolset.classList.add('mac');

    hotkeys('command+i,command+s', function (event, handler){
        event.preventDefault();
        switch (handler.key) {
            case 'command+s': 
                editor.classList.toggle('open');
                break;
            case 'command+i': 
                editor.classList.toggle('open');
                break;
        }
    });
} else {
    hotkeys('ctrl+i,ctrl+s', function (event, handler){
        event.preventDefault();
        switch (handler.key) {
            case 'ctrl+s': 
                alert('s');
                break;
            case 'ctrl+i': 
                alert('i');
                break;
        }
    });
}
