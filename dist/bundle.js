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

    "":function (require,module,exports){
           "use strict";

var _foo = require("./foo.js");

var _foo2 = _interopRequireDefault(_foo);

var _bar = require("./bar.js");

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _foo2.default)();
(0, _bar2.default)();
console.log('main.js');
        }
})