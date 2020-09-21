import {createStore,applyMiddleware} from 'redux'
import redux from './rootReaducer'
import thunk from 'redux-thunk'
const store = createStore(redux,applyMiddleware(thunk))

export default store
