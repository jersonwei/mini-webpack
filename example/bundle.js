function require(filePath){
    const map = {
        "./foo.js":foojs,
        "./bar.js":barjs,
        "./main.js":mainjs
    }
    const fn = map[filePath]

    const module = {
        exports:{
        }
    }
    fn(require,module,module.exports)

    return module.exports
}

require("./main.js")
function mainjs(require,module,exports){
// main js
// import foo from './foo.js'
// import bar from './bar.js'
const {foo} = require('./foo')
const {bar} = require('./bar')
foo()
bar()
console.log('main.js')

}
function foojs(require,module,exports){
    // foo js
    // import bar from './bar'
    function foo(){
        console.log('foo')
    }
    module.exports = {
        foo
    }
}

function barjs(require,module,exports){
    // import foo from './foo'
    function bar(){
    console.log('bar')
}
module.exports = {
    bar
}
}