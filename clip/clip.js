import {HTMLClip,CSSEffect} from "@donkeyclip/motorcortex";
import initParams from "./initParams";

export const clip = new HTMLClip({
  html: `
    <div class="container">
        <p>Welcome!</p>
        <p>You've picked <u>{{ initParams.color }}</u></p>
    </div>`,
  css: `
  .container {
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    color: {{ initParams.color }};
  }
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParamsValidationRules: {
    color: {
      label: "Text Color",
      type: "color",
      optional: true,
      default: "white",
    },
  },
  initParams: initParams[1].value,
});

const MyIncident = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        scale: 2,
      },
    },
  },
  {
    selector: ".container",
    duration: 2000,
    easing: "linear",
  }
);
clip.addIncident(MyIncident, 0);
