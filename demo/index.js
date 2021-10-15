import { utils } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import { clip } from "../clip/clip";
import clipId from "../clip/id";
import initParams from "../clip/initParams";
import initParamsApply from "./scripts/initParamsApply";

const liveDef = clip.exportLiveDefinition();
liveDef.props.id = clip.id;

const clipDef = clip.exportDefinition();
let player;
window.addEventListener("message", (event) => {
  if (event.data.what === "initParamsChange") {
    const newLiveDef = initParamsApply(liveDef, event.data.initParams);
    document.getElementById("projector").innerHTML = "<div id='clip'></div>";
    const newClipContainer = document.getElementById("clip");
    // set clip container's dimensions
    newClipContainer.style.width = clip.props.containerParams.width;
    newClipContainer.style.height = clip.props.containerParams.height;
    newLiveDef.props.host = newClipContainer;
    const newclip = utils.clipFromDefinition(newLiveDef);
    if (newclip.nonBlockingErrorClip) {
      // if the initParams validation has failed
      return alert("Error with init params");
    }
    player = new Player({ clip: newclip });
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
    playerOptions = JSON.parse(atob(searchOptions.settings));
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

player = new Player({
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
});

if (searchOptions.initParams) {
  player.changeInitParams(initParams[searchOptions.initParams].value);
}
