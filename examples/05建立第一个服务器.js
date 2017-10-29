'use strict'
const http = require('http')

let count = 0
const server = http.createServer((req, res) => {
    res.write(`你是第${count++}个登录服务器的用户`)
    res.end()
})

server.listen(2080, (error) => {
    if (error) {
        throw error
    }
    console.log('成功调用web服务器，端口：2080')
})
// process.stdin.setEncoding('utf8')
// process.stdout.setEncoding('utf8')
// const http = require('http')
//
// let count = 0
// const server = http.createServer((request, response) => {
//     response.write(`你是第个${count++}访问网站的人`)
//     response.end()
// })
//
// server.listen(2017, (error) => {
//     if (error) {
//         throw error
//     }
//     process.stdout.setEncoding('utf8')
//     process.stdout.write('成功调用服务器，端口：2017')
// })
