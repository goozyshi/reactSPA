import * as actionTypes from './constants';
const defaultState = {
  focused:false,
}
export default ( state = defaultState , action )=>{
  if(action.type === actionTypes.SEARCHFOCUS){
    return {focused:true}
  }
  if(action.type === actionTypes.SEARCHBLUR){
    return {focused:false}
  }
  return state;
}
