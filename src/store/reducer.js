import {Add_num,Del_num} from './actionType'
const defaultState = {
  num:1
}

const reducer = (state =defaultState,action)=>{
  console.log(state)
  console.log(action)
  let newState = JSON.parse(JSON.stringify(state))
  
  switch (action.type){
    case Add_num:
       newState.num += action.value;
       break;
    case Del_num:
      newState.num  -=  action.value
      break;
   
  }
  return newState
}
export default  reducer