var _require = function(id) {
    const fs = require('fs')
    const path = require('path')

    const filename = path.join(__dirname, id)
    _require.cache = _require.cache || {}
    if (_require.cache[filename]) {
        //if has cache, use the cache,and end the function
        return _require.cache[filename].exports
    }

    const dirname = path.dirname(filename)

    let code = fs.readFileSync(filename, 'utf-8')

    let module = {
        id: filename,
        exports: {}
    }
    let exports = module.exports

    // 立即執行函數
    code = `
    (function(_require, module, exports, __dirname, __filename){
        ${code}
    })(_require, module, exports, __dirname, __filename)
    `
    eval(code)

    //對於第一次沒有緩存，則將其緩存起來
    _require.cache[filename] = module

    return module.exports
}

setInterval(() => {

    var d = _require('./09.js')
    //清空缓存
    Object.keys(_require.cache).forEach((key)=>{
      delete _require.cache[key]
    })
    
    console.log(d.getTime())
}, 1000)
