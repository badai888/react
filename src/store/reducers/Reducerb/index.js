const defaultState ={
  num:10
}
const reducer = (state=defaultState,action)=>{
  let newState=JSON.parse(JSON.stringify(state))
  return newState
}
export default reducer