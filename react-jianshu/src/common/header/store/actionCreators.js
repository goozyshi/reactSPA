import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) =>({
  type: actionTypes.CHANGELIST,
  data: fromJS(data),
  totalpage: Math.ceil(data.length/10),
})

export const searchFocus = () =>({
  type: actionTypes.SEARCHFOCUS,
})
export const searchBlur = () =>({
  type: actionTypes.SEARCHBLUR,
})
// redux-thunk
export const getList = () =>{
  return(dispatch)=>{
    axios.get('/fakeapi.json')
    .then((res)=>{
      const data = res.data;
      dispatch(changeList(data.data))
    })
    .catch(()=>{
      throw Error
    })
  }
}
export const mouseEnter = () =>({
  type: actionTypes.MOUSEENTER,
})
export const mouseLeave = () =>({
  type: actionTypes.MOUSELEAVE,
})
export const changePage = (page) =>({
  type: actionTypes.CHANGEPAGE,
  page
})