import Player from "@kissmybutton/motorcortex-player";
import initParamsApply from './scripts/initParamsApply';
import {utils} from '@kissmybutton/motorcortex';
import CodeFlask from 'codeflask';

import {clip, initParamsMap} from "../clip/clip";

import {
    toolset,
    editor,
    closeEditor,
    saveParams,
    initParamsSetButton,
    errorContainer
} from './scripts/elements';



const isLoggedIn = false;

let clipContainer = document.getElementById('clip');
let initParamsOpen = false;
function toggleInitParams(save = false, code=""){
    if(initParamsSetButton.classList.contains('disabled')){
        return ;
    }

    if(save){
        let liveDef = clip.exportLiveDefinition();
        liveDef.props.id = clip.id;
        try{
            const myjson = JSON.parse(code);
            console.log(myjson);
            const newLiveDef = initParamsApply(liveDef, initParamsMap, myjson);
            document.getElementById("projector").innerHTML = "<div id='clip'></div>";
            clipContainer = document.getElementById('clip');
            // set clip container's dimensions
            clipContainer.style.width = clip.props.containerParams.width;
            clipContainer.style.height = clip.props.containerParams.height;
            newLiveDef.props.host = clipContainer;
            clip = utils.clipFromDefinition(newLiveDef);
            new Player({clip});
        } catch(e){
            errorContainer.innerHTML = `Error applying JSON. ${e.message}`;
            errorContainer.classList.remove('hdn');
            return ;
        }
    }
    
    errorContainer.classList.add('hdn');
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

new Player({clip});

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
            toggleInitParams(true, flask.getCode());
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
