import auth from './auth'
import nav from './nav'
import message from './message'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth,
    nav,
    message
})

export default rootReducer
