const defaultState = {
  num:1
}

const reducer = (state =defaultState,action)=>{
  console.log(state)
  console.log(action)
  let newState = JSON.parse(JSON.stringify(state))
  
  switch (action.type){
    case 'addnum':
       newState.num += action.value;
       break;
    case "delnum":
      newState.num  -=  action.value
      break;
   
  }
  return newState
}
export default  reducer