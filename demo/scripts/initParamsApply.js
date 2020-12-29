/**
 * 
 * @param {object} liveDefinition - the exported live definition of the Clip
 * @param {object} paramsMap - the params map as defined by the developer
 * @returns {object} - the new live definition to be used for constructing the new Clip
 */
export default function initParamsApply(liveDefinition, paramsMap){
    // first we are going to re-organise our paramsMap so it's organised by incident id
    const paramsByIncidentId = {};
    for(let key in paramsMap){
        for(let i=0; i<paramsMap[key].length; i++){
            
        }
    }
}