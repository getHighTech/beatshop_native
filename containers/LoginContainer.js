import React, { Component } from 'react'
import Login from '../components/Login'
import { ScrollView } from 'react-native'
import { Toast,Button } from 'antd-mobile'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { SignIn } from '../redux/actions/auth'



const LoginContainer = (props) => {
    return(
        <ScrollView>
            <Login {...props} />
        </ScrollView>
    )
}

LoginContainer.navigationOptions = {
    title: '登陆',
    headerLeft: null
}

const mapStateToProps = state => ({
    auth: state.auth,
    message: state.message
})
export default connect(mapStateToProps,{ SignIn })(LoginContainer)

