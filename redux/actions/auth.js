import Meteor from 'react-native-meteor'
export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNOUT = 'USER_SIGNOUT'


export const USER_SIGNIN_SUCCESS = () => {
    return {
        type:  USER_SIGNIN
    }
}

export const SignOut = () => {
    return {
        type:  USER_SIGNOUT
    }
}

export const  SignIn = () => {
    return (dispatch) => {
        let loginParams = {
            username: '18026938187',
            password: 'q1234567'
        }
        Meteor.call('app.user.login','123','wanrenchehui','password',loginParams,(res,err) => {
            dispatch(USER_SIGNIN_SUCCESS())
            console.log(res)
            console.log(err)
        })
    }
}