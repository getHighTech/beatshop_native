import auth from './auth'
import nav from './nav'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth,
    nav
})

export default rootReducer
