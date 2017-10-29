//实现命令行计算器功能
'use strict'
const args = process.argv.slice(2)

let a = args[0]
// console.log(a)
let op = args[1]
let b = args[2]

let result
switch (op) {
    case '+':
        result = parseFloat(a) + parseFloat(b)
        break
    case "-":
        result = parseFloat(a) - parseFloat(b)
        break
    case "*":
        result = parseFloat(a) * parseFloat(b)
        break
    case "/":
        result = parseFloat(a) / parseFloat(b)
        break
}

console.log(result)
// process.stdout.write(result)
