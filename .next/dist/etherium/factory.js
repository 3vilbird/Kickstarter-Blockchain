'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _campaignFactory = require('./build/campaignFactory.json');

var _campaignFactory2 = _interopRequireDefault(_campaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_campaignFactory2.default.interface), '0xC527123D6475FD84F75A467ca79aEb6dB575E10f');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsImNhbnBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBQ0EsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNiLEtBQUssQUFBTCxNQUFXLDBCQUFnQixBQUEzQixBQURhLFlBRWIsQUFGYSxBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZGV2aWwvdm9sdW1lL2xlYXJuaW5nX3Byb2plY3RzL2Jsb2NrLWNoYWluLXByb2plY3RzL2tpY2tzdGFydGVyIn0=