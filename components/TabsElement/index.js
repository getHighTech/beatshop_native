import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import styled from 'styled-components'
import { View, Text } from 'react-native' 

class TabsElement extends Component {
    render() {
        const { tabs } = this.props
        return (
            <Wrap>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    {tabs.map((tab, index) => {
                        return (
                            <TabContent key={index}>1</TabContent>
                        )
                    })}
                </Tabs>
            </Wrap>
        )
    }

}
export default TabsElement;

const Wrap = styled.View`
    background: #fff;
`

const TabContent = styled.Text`
    display: flex; 
    flex-direction: row;
    alignItems: center;
    justifyContent: center;
    height: 150px;
    backgroundColor: #fff;
`