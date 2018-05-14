import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'

class ShopDetail extends Component {
    render() {
        const tabs = [
            { title: '商品' },
            { title: '简介' },
          ];
        return(
            <Wrap>
                <BgImage source={{uri: 'https://img.alicdn.com/imgextra/i2/196993935/TB26I0bgvuSBuNkHFqDXXXfhVXa_!!196993935.jpg_q90.jpg'}} >
                </BgImage>
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

export default ShopDetail
const Wrap = styled(View)`
`

const BgImage = styled(Image)`
    height: 150px;
`
const ReTabs = styled(Tabs)`

`

