import React, { Component } from 'react'
import ShopDetail from '../components/ShopDetail'
import { ScrollView } from 'react-native'

class ShopDetailContainer extends Component {
    static navigationOptions = {
        title: '店铺详情',
    };
    render() {
        return(
            <ScrollView>
                <ShopDetail />
            </ScrollView>
        )
    }
}

export default ShopDetailContainer