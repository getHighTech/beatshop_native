import React, {Component} from 'react'
import styled from 'styled-components'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Picker, List } from 'antd-mobile'
const seasons = [
    [
      {
        label: '2013',
        value: '2013',
      },
      {
        label: '2014',
        value: '2014',
      },
    ],
    [
      {
        label: '春',
        value: '春',
      },
      {
        label: '夏',
        value: '夏',
      },
    ],
  ];
class HotProductList extends Component {
    state = {
        data: [],
        cols: 1,
        pickerValue: [],
        asyncValue: [],
        sValue: ['2013', '春'],
        visible: false,
      };
    render() {
        return(
            <Wrap>
                    <Card >
                        <NavWrap>
                            <Title>
                                万人车汇黑卡
                            </Title>
                            <Info>
                                购买一年的优惠资格
                            </Info>
                        </NavWrap>

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('GoodDetail') }>
                            <Img source={{uri: 'http://wanchehui.oss-cn-qingdao.aliyuncs.com/cards/bbg2.png'}}/>
                        </TouchableOpacity>
                        
                        <BottomWrap>
                            <PriceWrap>
                                <Icon source={require('../../assets/images/money.png')} />
                                <Price>365</Price>
                            </PriceWrap>
                            <BtnWrap>
                                <Skin bgcolor="#424242" onPress={()=> this.props.navigation.navigate('购物车')}>
                                    <Btn color="#fff" >
                                        加入购物车
                                    </Btn>
                                </Skin>
                                <Skin bgcolor="#FFD851">
                                    <Btn color="#424242"  >
                                        立即购买
                                    </Btn>
                                </Skin>
                            </BtnWrap>
                        </BottomWrap>
                    </Card>
                    <Card >
                        <NavWrap>
                            <Title>
                                万人车汇黑卡
                            </Title>
                            <Info>
                                购买一年的优惠资格
                            </Info>
                        </NavWrap>

                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('GoodDetail') }>
                            <Img source={{uri: 'http://wanchehui.oss-cn-qingdao.aliyuncs.com/cards/bbg2.png'}}/>
                        </TouchableOpacity>
                        
                        <BottomWrap>
                            <PriceWrap>
                                <Icon source={require('../../assets/images/money.png')} />
                                <Price>365</Price>
                            </PriceWrap>
                            <BtnWrap>
                                <Skin bgcolor="#424242" onPress={()=> this.props.navigation.navigate('购物车')}>
                                    <Btn color="#fff" >
                                        加入购物车
                                    </Btn>
                                </Skin>
                                <Skin bgcolor="#FFD851">
                                    <Btn color="#424242"  >
                                        立即购买
                                    </Btn>
                                </Skin>
                            </BtnWrap>
                        </BottomWrap>
                    </Card>
                <Picker
                    data={seasons}
                    title="选择季节"
                    cascade={false}
                    extra="请选择(可选)"
                    value={this.state.sValue}
                    onChange={v => this.setState({ sValue: v })}
                    onOk={v => this.setState({ sValue: v })}
                    >
                    <List.Item arrow="horizontal">Multiple</List.Item>
                    </Picker>
            </Wrap>
        )
    }
}

export default HotProductList


const Wrap = styled(View)`
`


const Card = styled(View)`
    width: 94%;
    background: #fff;
    margin:  10px auto 10px  auto;
    border-width: 1;
    border-radius: 2;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 2;
    elevation: 1;
`
const NavWrap = styled(View)`
    display: flex;
`

const Title = styled(Text)`
    margin: 10px 0 0 10px;
    font-size: 16px;
`

const Img = styled(Image)`
    height: 200px;
`

const Info = styled(Text)`
    margin: 4px 5px 8px  10px;
    font-size: 12px;
    color: #666;
`

const BottomWrap = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px 0 10px 0;
`

const PriceWrap = styled(View)`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`

const BtnWrap = styled(View)`
    margin-left: 58px;
    display: flex;
    flex-direction: row;
`

const Btn = styled(Text)`
    color: ${props => props.color};  
    padding: 12px 14px;
    font-weight: 900;
`

const Skin = styled(TouchableOpacity)`
    border-radius: 2px;
    background:  ${props => props.bgcolor};
    border-width: 1;
    border-radius: 5px;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 2;
    elevation: 1;
    margin-right: 8px;
`

const Icon = styled(Image)`
    margin: 5px 0 0 0;
    width: 26px;
    height: 26px;
`

const Price = styled(Text)`
    color: #FF582A;
    margin-left: 6px;
    margin-top: 8px;
    font-size: 20px;
`




