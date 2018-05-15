import { MSG_TEXT } from '../actions/message'
const initialNavState = 
    {
     Msg: '',
    }
export default message = (state = initialNavState, action ) => {
    switch (action.type) {
        case 'MSG_TEXT':
          return { ...state,Msg: action.err}
        case 'MSG_FAILD':
          return { ...state}
        default:
          return state
    }
}