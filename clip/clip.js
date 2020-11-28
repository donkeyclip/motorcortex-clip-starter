import MotorCortex from '@kissmybutton/motorcortex';

import Player from "@kissmybutton/motorcortex-player";

const clip = new MotorCortex.HTMLClip({
    html: `<div class="container"></div>`,
    css: `
        .container{
            width: 100%;
            height: 100%;
        }
    `,
    host: document.getElementById('clip'),
    containerParams: {
        width: '1200px',
        height: '900px'
    }
});

const player = new Player({clip});