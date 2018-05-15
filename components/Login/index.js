import React, { Component } from 'react'
import { List, InputItem, Button, WhiteSpace,Tabs, Toast } from 'antd-mobile'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { NavigationActions } from 'react-navigation'
import MessageHelper from '../../helper/MessagHelper'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
      }
    componentWillReceiveProps(nextProps){
        if(nextProps.message.Msg){
             Toast.info(MessageHelper(nextProps.message.Msg),1)
        }
    }
    _HandleChange = (key,value) => {
        this.setState({
            [key]: value
        })
    }
    
    _SignIn = () => {
        let { username, password } = this.state
        this.props.SignIn(username,password)
    }
    render() {
        const tabs = [
                { title: '账户登陆' },
                { title: '手机登陆' },
            ];
        return(
            <Wrap>
                <Tabs tabs={tabs}>
                <View>
                    <ReList>
                            <InputItem
                                type="number"
                                placeholder="请输入手机"
                                clear
                                onChange={v => this._HandleChange('username', v)}
                            >
                            手机
                            </InputItem>

                            < InputItem 
                            type = "password"
                            placeholder = "请输入密码" 
                            clear
                            onChange={v => this._HandleChange('password', v)}

                            >
                                密码 
                            </InputItem>
                    </ReList>
                    <ReButton onClick={()=> this._SignIn()}>登陆</ReButton>
                    <MsgWrap>
                        < Register onPress = {()=>this.props.navigation.navigate('购物车') } >
                            新用户注册
                        </Register>
                        <Forgot>
                            忘记密码
                        </Forgot>
                    </MsgWrap>
                </View>
                <View>
                    <ReList>
                            <InputItem
                                type="number"
                                placeholder="请输入手机"
                                clear
                            >
                            手机
                            </InputItem>

                            <ReInputItem 
                            type = "password"
                            placeholder = "请输入密码" 
                            clear
                            >
                                密码 
                            </ReInputItem>
                            <SendButton onClick={()=>console.log(`发送`)}>发送</SendButton>
                    </ReList>
                    <ReButton onClick={()=> this._SignIn()}>登陆</ReButton>
                </View>
            </Tabs>
            </Wrap>
        )
    }
}



export default Login



const ReList = styled(List)`
   margin: 30px 0 0 0;
   position: relative;
`
const Wrap = styled(View)`
    margin: 40px 0 0 0;
`
const MsgWrap = styled(View)`
     display: flex;
     flex-direction: row;
     justify-content: space-between;
`
const Register = styled(Text)`
    margin: 0 0 0 5px;
`
const Forgot = styled(Text)`
     margin: 0 5px 0 0;
`

const ReButton = styled(Button)`
    margin: 30px 0 20px 0;
`

const ReInputItem = styled(InputItem)`
`

const SendButton = styled(Button)`
   width: 100px;
   height: 44px;
   position: absolute;
   bottom: 0;
   right: 0;
   borderWidth: 0;
`