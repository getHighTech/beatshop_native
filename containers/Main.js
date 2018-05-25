import React, { Component } from 'react'
import { StackNavigator, TabNavigator, TabBarBottom, addNavigationHelpers } from 'react-navigation'
import Home from '../containers/Home'
import Cart from '../containers/Cart'
import Income from '../containers/InCome'
import Personal from '../containers/Personal'
import LoginContainer from '../containers/LoginContainer'
import ShopDetailContainer from '../containers/ShopDetailContainer'
import GoodDetailContainer from '../containers/GoodDetailContainer'
import LocationContainer from '../containers/LocationContainer'
import BankCardContainer from '../containers/BankCardContainer'
import WareHouseContainer from '../containers/WareHouseContainer'
import SaleGoodContainer from '../containers/SaleGoodContainer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { addListener } from '../redux/redux'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import {  BackHandler,AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'



class Main extends Component {
    constructor(props) {
        super(props);
        // this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
        const token = await AsyncStorage.getItem('token');
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        token ? this.props.dispatch(NavigationActions.navigate({ routeName: '首页' })) :  this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
      };
    
  

  
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
        navigationOptions: ({ navigation}) => ({
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
            activeTintColor: '#FFD043',
            inactiveTintColor: '#989898',
            labelStyle: {
                fontSize: 10,
                marginTop: -10,
            },
            style: {
                backgroundColor: 'rgba(0, 0, 0, 0.78)',
            },
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        
    }
)
export const  ConfigAppNavigator = (isLoggedIn) => {
    return  Navigator;
}
export const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        Login: { screen: LoginContainer},
        ShopDetail: { screen: ShopDetailContainer },
        GoodDetail: { screen: GoodDetailContainer },
        Location: { screen: LocationContainer },
        BankCard: { screen: BankCardContainer },
        WareHouse: { screen: WareHouseContainer },
        SaleGood: { screen: SaleGoodContainer },
    },
    {   
        navigationOptions: {
            headerTintColor: '#FFD851',
            showIcon: true,
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center',
                color: '#FFD851',
                fontSize: 22,
                
            },
            headerStyle: {
                backgroundColor: '#424242',
                borderBottomWidth: 1,
            },
            headerBackTitleStyle: {
                color: '#018080',
            },
            headerBackTitle: null
        },
    }
)

const mapStateToProps = state => ({
    nav: state.nav,
  });




export default  connect(mapStateToProps)(Main);