import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PersonalItem from '../components/PeronalItem'
import { connect } from 'react-redux'
import { SignOut } from '../redux/actions/auth'


const PersonContainer = (props) => {
    return(
        <PersonalItem {...props} />
    )
}

PersonContainer.navigationOptions = {
    title: '个人中心',
    headerLeft: null
}

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps,{ SignOut })(PersonContainer);