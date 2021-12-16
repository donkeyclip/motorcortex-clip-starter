import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { scaleBig, fadeOut } from "./incidents";
import { initParamsValidationRules, initParams } from "./initParams";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[1].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
});

clip.addIncident(scaleBig(".container", 2000), 0);
clip.addIncident(fadeOut(".container", 1500), 500);
