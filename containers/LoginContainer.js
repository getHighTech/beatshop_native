import React, { Component } from 'react'
import Login from '../components/Login'
import { ScrollView } from 'react-native'
import { Toast,Button } from 'antd-mobile'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { SignIn } from '../redux/actions/auth'


// class LoginContainer extends Component {
//      static navigationOptions = {
//          title: '登陆',
//      }
//      componentDidMount() {
//      }
//     render() {
        
//         return(
//             <ScrollView>
//                 <Login navigation={this.props.navigation}/>
//             </ScrollView>
//         )

//     }
// }

const LoginContainer = (props) => {
    return(
        <ScrollView>
            <Login {...props} />
        </ScrollView>
    )
}

LoginContainer.navigationOptions = {
    title: '登陆'
}




const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps,{ SignIn })(LoginContainer)

