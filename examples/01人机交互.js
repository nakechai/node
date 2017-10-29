var users = {
    admin: '123',
    good: '234',
    pretty: '345',
}
process.stdout.write('请输入用户名：\n');
var username = ''

process.stdin.on('data', (input) => {
    var input = input.toString().trim()
    var keys = Object.keys(users)
    if (!username) {
        //输入用户名的逻辑
        if (keys.indexOf(input) === -1) {
            process.stdout.write('用户名不存在\n')
            process.stdout.write('请重新输入用户名\n')
            username = ''
        } else {
            process.stdout.write('请输入密码\n')
            username = input
        }
    } else {
        //输入密码的逻辑
        if (input === users[username]) {
            console.log('success')
        } else {
            process.stdout.write('密码错误，请重新输入')
        }
    }
})

// var users = {
//     admin: '123',
//     root: '456'
// }
//
// var username = ''
// process.stdout.write('请输入用户名\n')
// process.stdin.write('data', (input) => {
//     var input = input.toString().trim()
//     var keys = Object.keys(users)
//     if (!username) {
//         if (keys.indexOf(input) === -1) {
//             console.log('用户名不存在，请重新输入用户名')
//             username = ''
//         } else {
//             console.log('请输入密码')
//             username = input
//         }
//     } else {
//         if (input === users[username]) {
//             console.log('登陆成功')
//         } else {
//             console.log('密码不正确，请重新输入密码')
//         }
//     }
// })
