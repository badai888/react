import {Add_num,Del_num} from './actionType'
const addnum = (value)=>{
  return {
    type:Add_num,
    value
  }
}
const delnum =(value)=>{
  return {
    type:Del_num,
    value
  }
}
export {
  addnum,
  delnum
}