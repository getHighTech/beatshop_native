import Meteor from 'react-native-meteor'
import { AsyncStorage } from 'react-native'
export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNOUT = 'USER_SIGNOUT'


export const USER_SIGNIN_SUCCESS = () => {
    return {
        type:  USER_SIGNIN
    }
}

export const USER_SIGNOUT_SUCCESS = () => {
    return {
        type:  USER_SIGNOUT
    }
}

export const SignOut = () => {
     return async dispatch => {
        let  token  = await AsyncStorage.removeItem('token')
        dispatch(USER_SIGNOUT_SUCCESS())
     }
 }

export const  SignIn = () => {
    return (dispatch) => {
        let loginParams = {
            username: '18026938187',
            password: 'q1234569'
        }
        Meteor.call('app.user.login','123','wanrenchehui','password',loginParams,(res,err) => {
            console.log(err.type)
            console.log(JSON.stringify(err))
            if(err){
                console.log(`进来`)
                let keyValue = [['user',JSON.stringify(err.type)],['token',JSON.stringify(err.msg.stampedToken)]]
                AsyncStorage.multiSet(keyValue,(err)=>{
                    if(err){
                        console.log(`失败`)
                       console.log(err)
                    }
                    dispatch(USER_SIGNIN_SUCCESS())
                    
                    console.log(`保存成功`)
                }) 
            }
        })
    }
}