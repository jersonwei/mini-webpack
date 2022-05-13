(function(madules){
    function require(filePath){
        const fn = madules[filePath]
    
        const module = {
            exports:{
            }
        }
        fn(require,module,module.exports)
    
        return module.exports
    }
    
    require("./main.js")
})({
    
        "./example/main.js":function (require,module,exports){
            "use strict";

var _foo = require("./foo.js");

var _foo2 = _interopRequireDefault(_foo);

var _bar = require("./bar.js");

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _foo2.default)();
(0, _bar2.default)();
console.log('main.js');
        },
        
        "D:\mixfile\Github\mini-webpack\example\foo.js":function (require,module,exports){
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

// import bar from './bar'
function foo() {
  console.log('foo');
}
        },
        
        "D:\mixfile\Github\mini-webpack\example\bar.js":function (require,module,exports){
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = bar;

// import foo from './foo'
function bar() {
  console.log('bar');
}
        },
        
})