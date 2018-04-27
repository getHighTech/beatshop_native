import React, { Component } from 'react'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Home from '../containers/Home'
import Cart from '../containers/Cart'
import Income from '../containers/InCome'
import Personal from '../containers/Personal'
import Ionicons from 'react-native-vector-icons/Ionicons';



class Main extends Component {
    render() {
        return(
           <Navigator />
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

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)
const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
    },
    {
        navigationOptions: {
            // headerStyle: { backgroundColor: color.primary }
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        },
    }
)


export default Main;