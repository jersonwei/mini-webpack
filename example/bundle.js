(function(modules){
    function require(id){
        const [fn,mapping] = modules[id]
    
        const module = {
            exports:{
            }
        }

        function localRequire(filePath){
            const id = mapping[filePath]
            return require(id)
        }
        fn(localRequire,module,module.exports)
    
        return module.exports
    }
    
    require(0)
    // function mainjs(require,module,exports){
    // // main js
    // // import foo from './foo.js'
    // // import bar from './bar.js'
    // const {foo} = require('./foo')
    // const {bar} = require('./bar')
    // foo()
    // bar()
    // console.log('main.js')
    
    // }
    // function foojs(require,module,exports){
    //     // foo js
    //     // import bar from './bar'
    //     function foo(){
    //         console.log('foo')
    //     }
    //     module.exports = {
    //         foo
    //     }
    // }
    
    // function barjs(require,module,exports){
    //     // import foo from './foo'
    //     function bar(){
    //     console.log('bar')
    // }
    // module.exports = {
    //     bar
    // }
    // }
})({
    0:[function (require,module,exports){
        // main js
        // import foo from './foo.js'
        // import bar from './bar.js'
        const {foo} = require('./foo.js')
        // const {bar} = require('./bar')
        foo()
        // bar()
        console.log('main.js')
        },{"./foo.js":1}],
    1:[function (require,module,exports){
        // foo js
        // import bar from './bar'
        function foo(){
            console.log('foo')
            
        }
        module.exports = {
            foo
        }
    },{}]
})