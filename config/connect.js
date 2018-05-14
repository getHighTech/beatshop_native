import Meteor from 'react-native-meteor';

export default function () {
    const url = 'ws://192.168.31.254:5000/websocket';
    Meteor.connect(url);
    
}