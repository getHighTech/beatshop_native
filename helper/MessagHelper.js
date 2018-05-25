export default  MessageHelper = (type) => {
    switch (type) {
        case 'USER NOT FOUND':
          return '用户不存在'
        case 'LOGIN PASS WRONG':
          return '密码错误'
        case 'LOGIN SUCCESS':
          return '登陆成功'
        case 'LOGOUT SUCCESS':
          return '退出成功'
        default:
          return '有问题'
    }
}