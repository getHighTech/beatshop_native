import React from 'react'
import BankCard from '../components/BankCard'
import { ScrollView } from 'react-native'
const BankCardContainer = (props) => {
    return(
        <ScrollView>
            <BankCard />
        </ScrollView>
    )
}

BankCardContainer.navigationOptions = {
    title: '我的银行卡',
}

export default BankCardContainer