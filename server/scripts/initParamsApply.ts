/**
 *
 * @param {object} liveDefinition - the exported live definition of the Clip
 * @param {object} params - the params passed by the user
 * @returns {object} - the new live definition to be used for constructing the new Clip
 */
import type { Definition } from "@donkeyclip/motorcortex";

export default function initParamsApply(
  liveDefinition: Definition,
  params: Definition["props"]["initParams"]
) {
  liveDefinition.props.initParams = params;
  return liveDefinition;
}
