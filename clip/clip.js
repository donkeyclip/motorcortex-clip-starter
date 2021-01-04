import MotorCortex from '@kissmybutton/motorcortex';
import clipStyle from './style.scss';

export const clip = new MotorCortex.HTMLClip({
    html: `<div class="container">
        <%= initParams.x %>
        <br/>
        <%= initParams.y %>
    </div>`,
    css: clipStyle.toString(),
    host: document.getElementById('clip'),
    containerParams: {
        width: '1200px',
        height: '675px'
    },
    initParams: {
        x: 12,
        y: 13,
        color: "white"
    }
});

export const initParamsMap = {
    x: [
        `${clip.id}.props.initParams.x`
    ],
    color: [
        `${clip.id}.props.initParams.color`
    ]
}