var fps = 10

var fs = require('fs')

var frames = []

for (var i = 1; i < 7; i++) {
    frames[frames.length] = fs.readFileSync(`./resources/frames/${i}.txt`, 'utf-8')
}

var index = 0

var render = () => {
    //清空控制台
    process.stdout.write('033[0f')
    process.stdout.write('033[2J')
    //重绘
    if (index === frames.length) {
        index = 0
    }
    process.stdout.write(frames[index++])
}

setInterval(render, 1000 / fps)
