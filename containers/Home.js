import React, { Component } from 'react'
import { View, Text,AsyncStorage, ScrollView } from 'react-native'
import HomeItem from '../components/HomeItem'
import HotProductList from '../components/HomeItem/hotProductList'
import { connect } from 'react-redux'
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import {  Toast,Button,Popover } from 'antd-mobile'


const HomeContainer = (props) => {
    return(
        <ScrollView>
            <HomeItem  {...props}/>
            <HotProductList {...props}/>
        </ScrollView>
    )
}

HomeContainer.navigationOptions = {
    title: '万人车汇',
    headerLeft: null
}


const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(HomeContainer);