var fps = 10

var frames = []

frames[frames.length] = `
╭~~~╮
(o^.^o)
`

frames[frames.length] = `
╭~~~╮
(o@.@o)
`

frames[frames.length] = `
╭~~~╮
(o~.~o)
`
frames[frames.length] = `
╭ ﹌╮
(o'.'o)
`

frames[frames.length] = `
╭%╮ ╭'''╮
(@^o^@) (⌒:⌒)
(~):(~) (~)v(~)
`
var index = 0

var render = () => {
    //清空控制台
    // var height = process.stdout.getWindowSize()[1]
    // for (var i = 0; i < height; i++) {
    //     process.stdout.write('/r/n')
    // }

    //另一种清空控制台的方式
    process.stdout.write('033[0f')
    process.stdout.write('033[2J')
    //重绘
    if (index === frames.length) {
        index = 0
    }
    process.stdout.write(frames[index++])
}

setInterval(render, 1000 / fps)
