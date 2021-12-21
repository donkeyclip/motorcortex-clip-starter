import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { fadeOut } from "../../library/fadeOut";
import { scaleBig } from "../../library/scaleBig";

const clip = new HTMLClip({
  html,
  css,
  selector: "#root",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    fontSize: "@expression(initParams.fontSize)",
    color: "@expression(initParams.color)",
  },
});

clip.addIncident(fadeOut(".container", 2000), 0);
clip.addIncident(scaleBig(".container", 2000), 0);
export default clip;
