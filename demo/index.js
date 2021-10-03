import { clip } from "../clip/clip";
import Player from "@donkeyclip/motorcortex-player";
import initParamsApply from "./scripts/initParamsApply";
import { utils } from "@donkeyclip/motorcortex";
import clipId from "../clip/id";
import initParams from "../clip/initParams";
import * as base64 from "base-64";
const liveDef = clip.exportLiveDefinition();
liveDef.props.id = clip.id;

const clipDef = clip.exportDefinition();

window.addEventListener("message", (event) => {
  if (event.data.what === "initParamsChange") {
    const newLiveDef = initParamsApply(liveDef, event.data.initParams);
    document.getElementById("projector").innerHTML = "<div id='clip'></div>";
    const clipContainer = document.getElementById("clip");
    // set clip container's dimensions
    clipContainer.style.width = clip.props.containerParams.width;
    clipContainer.style.height = clip.props.containerParams.height;
    newLiveDef.props.host = clipContainer;
    const newclip = utils.clipFromDefinition(newLiveDef);
    if (newclip.nonBlockingErrorClip) {
      // if the initParams validation has failed
      return alert("Error with init params");
    }
    window.mc = { Player: new Player({ clip: newclip }) };
  }
});

const clipContainer = document.getElementById("clip");
// set clip container's dimensions
clipContainer.style.width = clip.props.containerParams.width;
clipContainer.style.height = clip.props.containerParams.height;

const searchQuery = window.location.search.split("?")[1] || "";
const params = searchQuery.split("&").map((pair) => pair.split("="));
const searchOptions = {};
for (const i in params) {
  searchOptions[params[i][0]] = params[i][1];
}

let playerOptions = {};
if (searchOptions.settings) {
  try {
    playerOptions = JSON.parse(base64.decode(searchOptions.settings));
  } catch (e) {
    console.error("Invalid options:", searchOptions.settings);
  }
}

window.top.postMessage(
  {
    what: "clipLoaded",
    clipDims: clip.props.containerParams,
    clipDef: JSON.parse(JSON.stringify(clipDef)),
    clipId,
    initParams,
    selectedParamsIndex: searchOptions.initParams,
  },
  "*"
);

window.mc = {
  player: new Player({
    clip,
    pointerEvents: true,
    ...playerOptions,
    onMillisecondChange: (ms) => {
      window.top.postMessage(
        {
          what: "msChanged",
          millisecond: ms,
        },
        "*"
      );
    },
  }),
};

if (searchOptions.initParams) {
  window.mc.player.changeInitParams(initParams[searchOptions.initParams].value);
}
