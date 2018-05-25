import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import WareHouse from '../components/WareHouse'


const WareHouseContainer = (props) => {
    return(
        <ScrollView>
            <WareHouse />
        </ScrollView>
    )
}

WareHouseContainer.navigationOptions = {
    title: '商品库',
}



export default WareHouseContainer;




