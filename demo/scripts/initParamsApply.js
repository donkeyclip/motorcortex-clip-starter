import {addToObject, getFromObject} from './pathHandler';

/**
 * 
 * @param {object} liveDefinition - the exported live definition of the Clip
 * @param {object} paramsMap - the params map as defined by the developer
 * @param {object} params - the params passed by the user
 * @returns {object} - the new live definition to be used for constructing the new Clip
 */
export default function initParamsApply(liveDefinition, paramsMap, params){
    /* initially we are going to create a collection with all the incidents along with their attrs and props
    references, such as follows:
    {
        <incidentid>: {attrs, props},
        ...
    }
    */
   const incidents = {};
   function addIncident(incident, id=null){
       incidents[incident.props.id] = {
           attrs: incident.attrs,
           props: incident.props
       }

       if(incident.hasOwnProperty('incidents')){
           for(let inckey in incident.incidents){
               addIncident(incident.incidents[inckey].leaf)
           }
       }
   }
   addIncident(liveDefinition);

    // then we are going to iterate to the passed params and we are going to substitue the original values 
    // with the passed ones
    for(let key in paramsMap){
        // first check if the key path is included on the provided params
        const val = getFromObject(params, key);
        if(val === undefined){
            continue;
        }

        // iterate within the array of values that the path affects
        for(let i=0; i<paramsMap[key].length; i++){
            addToObject(incidents, paramsMap[key][i], val, true);
        }
    }

    return liveDefinition;
}