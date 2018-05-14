import { USER_SIGNIN, USER_SIGNOUT } from '../actions/auth'

const initialState = 
    {
     isLoggedIn: false,
     isFetch: false,
    }
export default  auth = (state=initialState, action) => {
    switch (action.type) {
        case 'USER_SIGNIN':
          return { ...state, isLoggedIn: true }
        case 'USER_SIGNOUT':
          return { ...state, isLoggedIn: false }
        default:
          return state
      }
}