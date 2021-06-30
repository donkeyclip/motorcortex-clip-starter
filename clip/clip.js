import MotorCortex from "@kissmybutton/motorcortex";
// import clipStyle from "./style.css"; // TODO how to bring this back

export const clip = new MotorCortex.HTMLClip({
  html: `<div class="container">
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
