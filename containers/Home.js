import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HomeItem from '../components/HomeItem'
import { connect } from 'react-redux'
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import {  Toast,Button } from 'antd-mobile'
import { NavigationActions } from 'react-navigation'


class Home extends Component {
    static navigationOptions = {
        title: '首页',
    }
   componentDidMount() {
    //   Meteor.call('get.user.id', 'NR4uitrWdh9eL649k', (err, rlt)=>{
    //         Toast.info(JSON.stringify(err), 1);
    //         Toast.info(JSON.stringify(rlt), 1);
    //   });
    }
   
    render() {
        return (
            <View>
                <HomeItem  navigation={this.props.navigation}/>
                <Button onClick={()=>this.props.navigation.navigate('Login')}>登录</Button>
            </View>
        )
    }
}


const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Home);