import React from 'react';
import Main from './containers/Main'
import { Provider } from 'react-redux'
import connect from './config/connect'
import store from './redux/store'


export default class App extends React.Component {
   
   componentWillMount() {

     connect();

    }

  render() {
    return (
     <Provider store={store}>
       <Main />
     </Provider>
    );
  }
}



