import MotorCortex from "@donkeyclip/motorcortex";
// import clipStyle from "./style.css"; // TODO how to bring this back
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
const AnimePlugin = MotorCortex.loadPlugin(AnimePluginDefinition);

export const clip = new MotorCortex.HTMLClip({
  html: `<div class="container a">
        Welcome!
        <br/><br/>
        You've picked <u>{{ initParams.color }}</u>
    </div>`,
  css: `
  .container{
    width: 100%;
    height: 100%;
    color: {{ initParams.color }};
    padding: 60px 0;
    text-align: center;
  }
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParamsValidationRules: {
    color: {
      type: "color",
      optional: true,
      default: "white",
    },
  },
  initParams: {
    color: "white",
  },
});

const MyAnime = new AnimePlugin.Anime(
  {
    animatedAttrs: {
      transform: {
        translateX: "50px",
        scale: 2,
      },
    },
  },
  {
    selector: ".a",
    duration: 2000,
    easing: "linear",
  }
);
clip.addIncident(MyAnime, 0);
