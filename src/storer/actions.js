const change = (value)=>{
    return {
      type:'change',
      value
    }
}
const add=(input)=>{
  return {
    type :"add",
    value:{
      input,
      isshoe:false
    }
  }
}
const del=(value)=>{
  return{
    type:"del",
    value
  }
}
const qie =(index)=>{
  return {
    type:"qie",
    index
  }
}
export {
  change,
  add,
  del,
  qie
}