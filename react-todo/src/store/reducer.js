const defaultState = {
  data:[
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ],
  inputvalue:''
}
export default (state = defaultState, action) =>{
  if(action.type === 'change-value'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputvalue = action.value;
    return newState
  }
  if(action.type === 'click'){
    const newState = JSON.parse(JSON.stringify(state))
    console.log(newState.inputvalue)
    newState.data.push(newState.inputvalue);
    newState.inputvalue = '';
    return newState
  }
  if(action.type === 'delete'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.data.splice(action.index,1);
    return newState
  }
  return state;
}