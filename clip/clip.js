import MotorCortex from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
import initParams from "./initParams";
const AnimePlugin = MotorCortex.loadPlugin(AnimePluginDefinition);

export const clip = new MotorCortex.HTMLClip({
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

const MyAnime = new AnimePlugin.Anime(
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
clip.addIncident(MyAnime, 0);
