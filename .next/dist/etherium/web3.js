'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //WE ARE IN         browser
    web3 = new _web2.default(_web2.default.givenProvider || "http://localhost:8545");
} else {
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/8b26dde229f6446b9d8ad92d0b2fcce8');
    web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJnaXZlblByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKO0FBQ0EsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBd0UsQUFDcEU7QUFDQTtXQUFNLEFBQUksQUFBSixrQkFBUyxjQUFLLEFBQUwsaUJBQXNCLEFBQS9CLEFBQU4sQUFDSDtBQUhELE9BSUksQUFDQTtRQUFNLFdBQVcsSUFBSyxjQUFLLEFBQUwsVUFBZSxBQUFwQixhQUNiLEFBRGEsQUFBakIsQUFHQTtXQUFNLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQU4sQUFDSDtBQUNEO2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9kZXZpbC92b2x1bWUvbGVhcm5pbmdfcHJvamVjdHMvYmxvY2stY2hhaW4tcHJvamVjdHMva2lja3N0YXJ0ZXIifQ==