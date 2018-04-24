import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Button
} from 'antd-mobile';
import styled from 'styled-components'

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>Open up App.js to start working on your app123!</StyledText>
        <StyledText>Changes you make will automatically reload.</StyledText>
        <StyledText>Shake your phone to open the developer menu.</StyledText>
        < Button >antd - mobile button </Button>
      </StyledView>
    );
  }
}


const StyledView = sytled.View`
  backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
`

const StyledText = styled.Text`
  color: red;
`
