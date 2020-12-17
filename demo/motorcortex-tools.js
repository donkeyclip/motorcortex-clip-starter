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
}

