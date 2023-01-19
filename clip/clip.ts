import { HTMLClip } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import { fadeOut } from "./effects/fadeOut";
import { scaleBig } from "./effects/scaleBig";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
});

clip.addIncident(fadeOut, 0);
clip.addIncident(scaleBig(".container", 2000), 0);

export { clip };
