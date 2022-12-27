import { CSSEffect, HTMLClip } from "@donkeyclip/motorcortex";
import html from "../clip/
import css from "./clip.css";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { fadeOut } from "./effects/fadeOut"
import { scaleBig } from "./effects/scaleBig";

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

//clip.addIncident(fadeOut, 0);
clip.addIncident(scaleBig(".container", 8000) as any, 0);
