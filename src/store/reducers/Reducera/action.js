import {Add,Del,Change,Qie} from './actionstype'
const change=(value)=>{
  return{
    type:Change,
    value
  }
}
 const add =(input)=>{

  return {
    type:Add,
    value:{
      input,
      isshow:false
    }
    
  }
}

// const addjs = (input)=>{
//   return (dispatch)=>{
//     setTimeout(()=>{
//       dispatch(add(input))
//     },2000)
//   }
// }
const del=(index)=>{
  return {
    type:Del,
    index
  }
}
const qie = (index)=>{
  return{
    type:Qie,
    index
  }
}
export {
  change,
  del,
  add,
  qie,
  // addjs
}