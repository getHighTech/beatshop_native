import { NavigationActions } from 'react-navigation'
import { Navigator } from '../../containers/Main'
import { USER_SIGNIN, USER_SIGNOUT } from '../actions/auth'
import { AsyncStorage } from 'react-native'
bootstrapAsync = async () => {
    return   await AsyncStorage.getItem('token');
}
const token = bootstrapAsync()
const firstAction = Navigator.router.getActionForPathAndParams('Tab') || {
    type: 'Navigation/NAVIGATE',
    routeName: 'Tab'
  }
const tempNavState = Navigator.router.getStateForAction(firstAction);
const secondAction =  token ? firstAction : Navigator.router.getActionForPathAndParams('Login')
const initialNavState = Navigator.router.getStateForAction(
  secondAction,
  tempNavState
);



export default  nav = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
      case 'USER_SIGNIN':
        nextState = Navigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: '首页' }),
          state
        );
        break;
      case 'USER_SIGNOUT':
        nextState = Navigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Login' }),
          state
        );
        break;
      default:
        nextState = Navigator.router.getStateForAction(action, state);
        break;
    }
    return nextState || state;
  }