"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Campaign = require("./build/Campaign.json");

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCLEFBQ0E7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBWSxBQUN2QjtXQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNILEtBQUssQUFBTCxNQUFXLG1CQUFTLEFBQXBCLEFBREcsWUFFSCxBQUZHLEFBQVAsQUFJSDtBQUxEIiwiZmlsZSI6ImNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2RldmlsL3ZvbHVtZS9sZWFybmluZ19wcm9qZWN0cy9ibG9jay1jaGFpbi1wcm9qZWN0cy9raWNrc3RhcnRlciJ9