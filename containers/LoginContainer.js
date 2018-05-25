import React, { Component } from 'react'
import Login from '../components/Login'
import { ScrollView } from 'react-native'
import { Toast,Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { SignIn } from '../redux/actions/auth'
import styled from 'styled-components'



const LoginContainer = (props) => {
    return(
        <ScrollWrap>
            <Login {...props} />
        </ScrollWrap>
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

const ScrollWrap = styled(ScrollView)`
    background: #151313;
`

