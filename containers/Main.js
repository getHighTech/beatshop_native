import React, { Component } from 'react'
import { StackNavigator, TabNavigator, TabBarBottom, addNavigationHelpers } from 'react-navigation'
import Home from '../containers/Home'
import Cart from '../containers/Cart'
import Income from '../containers/InCome'
import Personal from '../containers/Personal'
import LoginContainer from '../containers/LoginContainer'
import ShopDetailContainer from '../containers/ShopDetailContainer'
import GoodDetailContainer from '../containers/GoodDetailContainer'
import AuthLoading from '../containers/Auth'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { addListener } from '../redux/redux'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import {  BackHandler } from 'react-native'


class Main extends Component {
   
    render() {
        const { dispatch, nav } = this.props;
        return(
           <Navigator   
           navigation={addNavigationHelpers({ 
            dispatch: dispatch,
            state: nav,
            addListener,
          })} 
          />
        )
    }
}


const Tab = TabNavigator(
    {
        '首页': { screen: Home },
        '佣金': { screen: Income},
        '购物车': { screen: Cart},
        '个人中心': { screen: Personal}
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === '首页') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === '购物车') {
                    iconName = `ios-cart${focused ? '' : '-outline'}`;
                } else if (routeName === '佣金') {
                    iconName = `ios-card${focused ? '' : '-outline'}`;
                } else if (routeName === '个人中心') {
                    iconName = `ios-contact${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 10,
                marginTop: -4,
            },
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)
export const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        Login: { screen: LoginContainer},
        ShopDetail: { screen: ShopDetailContainer },
        GoodDetail: { screen: GoodDetailContainer },
        Auth: { screen: AuthLoading},
    },
    {   
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center',
            },
        },
    }
)

const mapStateToProps = state => ({
    nav: state.nav,
  });




export default  connect(mapStateToProps)(Main);