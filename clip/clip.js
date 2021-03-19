import MotorCortex from "@kissmybutton/motorcortex";
import clipStyle from "./style.css";

export const clip = new MotorCortex.HTMLClip({
  html: `<div class="container">
        Welcome!
        <br/><br/>
        You've picked <u><%= initParams.color %></u>
    </div>`,
  css: clipStyle.toString(),
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    color: "white", // eventhough we expect color's value on our initParams, still "white" will act as the default
  },
});

export const initParamsMap = {
  color: [`${clip.id}.props.initParams.color`],
};
