import MotorCortex from '@kissmybutton/motorcortex';

export const clip = new MotorCortex.HTMLClip({
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
        height: '675px'
    }
});

export const initParamsMap = {
    width: [
        `${clip.id}.initParams.x`
    ]
}