import {combineReducers} from  'redux'
import todoReducer from './reducers/Reducera'
import todoReduce from './reducers/Reducerb'
 const root = combineReducers({
   todo:todoReducer,
   todob:todoReduce
 })
 export default root