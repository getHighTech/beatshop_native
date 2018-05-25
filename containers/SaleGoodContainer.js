import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import SaleGood from '../components/SaleGood'


const SaleGoodContainer = (props) => {
    return(
        <ScrollView>
            <SaleGood />
        </ScrollView>
    )
}

SaleGoodContainer.navigationOptions = {
    title: '销售商品',
}



export default SaleGoodContainer;