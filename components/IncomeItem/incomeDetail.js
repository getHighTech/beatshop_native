import React, { Component } from 'react'
import { Wrap, TitleWrap, Img, Title } from './earn'
import TabsElement from '../TabsElement'

class incomeDetail extends Component {
    render() {
        const tabs = [
            { title: '已付款', sub: '1' },
            { title: '已结算', sub: '2' },
            { title: '失效', sub: '3' },
        ];
        return (
            <Wrap>
                <TitleWrap>
                    <Img source={require('../../assets/images/details.png')} />
                    <Title>
                        明细
                    </Title>
                </TitleWrap>
                <TabsElement tabs={tabs} />
            </Wrap>
        )
    }
}

export default incomeDetail



