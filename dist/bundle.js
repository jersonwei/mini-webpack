(function(madules){
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
    
    require(1)
})({
    
        "0":[function (require,module,exports){
            "use strict";

var _foo = require("./foo.js");

var _foo2 = _interopRequireDefault(_foo);

var _bar = require("./bar.js");

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _foo2.default)();
(0, _bar2.default)();
console.log('main.js');
        },{"./foo.js":1,"./bar.js":2}],
        
        "1":[function (require,module,exports){
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

// import bar from './bar'
function foo() {
  console.log('foo');
}
        },{}],
        
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