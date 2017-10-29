
//人机交互
var users = {
    admin: '123',
    cld: '926',
    lxq: '253'
}

process.stdout.write('请输入用户名:\n')
var username = ''

process.stdin.on('data', (input) => {
    var input = input.toString().trim()
    var keys = Object.keys(users)

    if (!username) {
        if (keys.indexOf(input) === -1 ) {
            process.stdout.write('用户名输入错误\n')
            process.stdout.write('请重新输入用户名\n')
            username = ''
        } else {
            process.stdout.write('用户名存在\n')
            process.stdout.write('请输入密码：\n')
            username = input
        }
    } else {
        //用户名存在，输入密码进行判断
        if (input === users[username]) {
            console.log('success')
        } else {
            process.stdout.write('请输入密码：\n')
        }
    }
})

// // 当前命令行中后回车符出现 触发
// process.stdin.on('data', (data) => {
//
//   process.stdout.write(data);
//
// });
