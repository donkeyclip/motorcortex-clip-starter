import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import initParamsValidationRules from "./initParamsValidationRules";

export const clip = new HTMLClip({
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

clip.addIncident(scene1, 0);
