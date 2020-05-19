import clubReducer from './clubs'

import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    clubs:clubReducer
})

export default rootReducer