import { fromJS } from 'immutable';
import * as actionTypes from './constants';
const defaultState = fromJS({
  focused:false,
  mouseIn:false,
  list:[],
  page:1,
  totalpage:1,
  logined: false,
});
export default ( state = defaultState , action )=>{
  switch(action.type){
    case actionTypes.SEARCHFOCUS :
      return state.set('focused', true);
    case actionTypes.SEARCHBLUR :
      return state.set('focused', false);
    case actionTypes.CHANGELIST :
      return state.set('list', action.data).set('totalpage', action.totalpage);
    case actionTypes.MOUSEENTER :
      return  state.set('mouseIn', true);
    case actionTypes.MOUSELEAVE :
      return  state.set('mouseIn', false);
    case actionTypes.CHANGEPAGE :
      return  state.set('page', action.page);
    case actionTypes.CHANGELOGIN :
      return state.set('logined',true)
    default:
      return state;
  }
}
