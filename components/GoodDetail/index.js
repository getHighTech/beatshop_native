import React,{ Component } from 'react'
import TabsElement from '../TabsElement'
import styled from 'styled-components'
import { Tabs } from 'antd-mobile'
import { View, Text } from 'react-native'


class GoodDetail extends Component {
    render() {
        const tabs = [
            { title: '详情', sub: '1' },
            { title: '参数', sub: '2' },
        ];
        return(
            <Wrap>
                <GoodName>红米Note5 AI双摄</GoodName>
                <PriceWrap>
                    <Price>￥679</Price>
                    <Cost>
                        <Text>价格:</Text> 
                        <CostPrice>￥762</CostPrice>
                    </Cost>
                </PriceWrap>
                <Tabs tabs={tabs}>
                     <View>
                        <Text> Content of first tab</Text>
                    </View>
                     <View>
                        <Text> Content of first tab</Text>
                    </View>
                </Tabs>
            </Wrap>
        )
    }
}

export default GoodDetail


const Wrap = styled(View)`
`

const PriceWrap = styled(View)`
    padding: 10px 0 10px 10px;
    display: flex;
    flex-direction: row;
    background: #fff;
    margin-bottom: 5px;
`

const Price = styled(Text)`
    color: red;
    font-size: 20px;
`
const Cost = styled(View)`
    display: flex;
    flex-direction: row;
    width: 60%;
    align-items: center;
    padding-left: 10px;
`
const CostPrice = styled(Text)`
    text-decoration:line-through;
    margin: 0px 0 0 10px;;
    color: #908484;
    font-size: 14px;
`
const GoodName = styled(Text)`
    background: #fff;
    font-size: 20px;
    padding: 5px 0 0 10px;;
`