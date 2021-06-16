import { utils } from "@kissmybutton/motorcortex";
import Player from "@kissmybutton/motorcortex-player";
import { clip } from "../clip/clip";
import clipId from "../clip/id";
import initParamsApply from "./scripts/initParamsApply";

const liveDef = clip.exportLiveDefinition();
liveDef.props.id = clip.id;

const clipDef = clip.exportDefinition();
window.top.postMessage(
  {
    what: "clipLoaded",
    clipDims: clip.props.containerParams,
    clipDef: JSON.parse(JSON.stringify(clipDef)),
    clipId,
  },
  "*"
);

window.addEventListener("message", (event) => {
  if (event.data.what !== "initParamsChange") {
    return;
  }

  const newLiveDef = initParamsApply(liveDef, event.data.initParams);
  document.getElementById("projector").innerHTML = "<div id='clip'></div>";
  const clipContainer = document.getElementById("clip");
  // set clip container's dimensions
  clipContainer.style.width = clip.props.containerParams.width;
  clipContainer.style.height = clip.props.containerParams.height;
  newLiveDef.props.host = clipContainer;
  const newclip = utils.clipFromDefinition(newLiveDef);
  window.mc = { Player: new Player({ clip: newclip }) };
});

const clipElement = document.getElementById("clip");
// set clip container's dimensions
clipElement.style.width = clip.props.containerParams.width;
clipElement.style.height = clip.props.containerParams.height;

window.mc = { Player: new Player({ clip }) };
