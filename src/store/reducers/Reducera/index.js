import {Add,Del,Change,Qie} from './actionstype'
let defaultState = {
  input:'1',
  arr:[]
}
const todoState = localStorage.getItem('todoState')?JSON.parse(localStorage.getItem('todoState')):{
  input:'1',
  arr:[]
}
defaultState = todoState

const reducer = (state=defaultState,action)=>{
  let newState =JSON.parse(JSON.stringify(state))
  console.log(state)
  console.log(action)
  console.log(newState)
  switch(action.type){
    case Change:
      newState.input=action.value;
      break;
    case Add:
      newState.arr.push(action.value);
      newState.input=""
      break;
    case Qie:
     newState.arr[action.index].isshow=!newState.arr[action.index].isshow
      break;
    case Del:
      newState.arr.splice(action.index,1);
      break;
      default :break;
  }
  console.log(newState)
  localStorage.setItem('todoState',JSON.stringify(newState))
  return newState

}

export default  reducer
