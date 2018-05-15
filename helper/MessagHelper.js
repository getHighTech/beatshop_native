export default  MessageHelper = (type) => {
    switch (type) {
        case 'USER NOT FOUND':
          return '用户不存在'
        case 'LOGIN PASS WRONG':
          return '密码错误'
        default:
          return '有问题'
    }
}