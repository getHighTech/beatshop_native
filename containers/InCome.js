import React, { Component } from 'react'
import { View, Text, ScrollView} from 'react-native'
import IncomeIten from '../components/IncomeItem'
import Earn from '../components/IncomeItem/earn'
import IncomeDetail from '../components/IncomeItem/incomeDetail'

class InCome extends Component {
    static navigationOptions = {
        title: '佣金',
        headerLeft: null
    };
    render() {
        const tabs = [
            { title: '已付款', sub: '1' },
            { title: '已结算', sub: '2' },
            { title: '失效', sub: '3' },
        ];
        return (
            <ScrollView>
                <IncomeIten />
                <Earn />
                <IncomeDetail />
            </ScrollView>
        )
    }
}

export default InCome;