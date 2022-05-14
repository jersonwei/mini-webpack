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
})({
    
        "0":[function (require,module,exports){
            "use strict";

var _foo = require("./foo.js");

// import bar from './bar.js'
(0, _foo.foo)(); // bar()

console.log('main.js');
        },{"./foo.js":1}],
        
        "1":[function (require,module,exports){
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

var _bar = require("./bar.js");

function foo() {
  console.log('foo');
  (0, _bar.bar)();
}
        },{"./bar.js":2}],
        
        "2":[function (require,module,exports){
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = bar;

// import foo from './foo'
function bar() {
  console.log('bar');
}
        },{}],
        
})