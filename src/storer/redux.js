const defaultState = {
  input:"5",
  arr:[]
}
const reducer = (state=defaultState,action)=>{
  console.log(action)
  let newState = JSON.parse(JSON.stringify(state)) //深克隆
  switch (action.type){
    case "change":
      newState.input=action.value
      break;
    case 'add':
      newState.arr.push(action.value)
      newState.input=""
      break;
      case 'del':
        newState.arr.splice(action.value,1)
        break;
      case "qie":
        newState.arr[action.index].isshoe=!newState.arr[action.index].isshoe
        break;
      default: break;
  }
  return newState
 

}
export default reducer