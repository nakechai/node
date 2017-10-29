// console.log('开始执行')
//
// console.time('main')
// for (var i = 0; i < 100000000; i++) {
//
// }
//
// console.timeEnd('main')
//
// console.log('结束执行')


var log = function() {
    console.log.apply(console, arguments)
}

log(1)
setTimeout(()=>{log(4)}, 2000)
setTimeout(()=>{log(3)}, 1000)
log(2)

//上述四行代码，先执行同步的操作，全部执行结束了；
//再执行异步操作（看有哪个时间到了就先执行哪个）

// 1
// 2
// 3
// 4
