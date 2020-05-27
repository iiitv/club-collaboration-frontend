import clubReducer from './clubs'
import bannerReducer from "./BannerSildeshowImage"
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    clubs:clubReducer,
    banner:bannerReducer
})

export default rootReducer

