'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../etherium/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layouts = require('../components/Layouts');

var _Layouts2 = _interopRequireDefault(_Layouts);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/devil/volume/learning_projects/block-chain-projects/kickstarter/pages/index.js?entry';


var campaignIndex = function (_Component) {
    (0, _inherits3.default)(campaignIndex, _Component);

    function campaignIndex() {
        (0, _classCallCheck3.default)(this, campaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (campaignIndex.__proto__ || (0, _getPrototypeOf2.default)(campaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(campaignIndex, [{
        key: 'renderCampaigns',

        // rendering the campaign lists

        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {

                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: 'campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    }, 'View campaign ')),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layouts2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Open campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getdeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return campaignIndex;
}(_react.Component);

exports.default = campaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXRzIiwiTGluayIsImNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0ZGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUSxBQUFXOzs7Ozs7O0ksQUFJYjs7Ozs7Ozs7OzthQU1GOzs7OzBDQUVpQixBQUNiO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFVLEFBRTdDOzs7NEJBQU0sQUFDSyxBQUNQO2lEQUNJLEFBQUMsOEJBQUssc0JBQU4sQUFBMEI7c0NBQTFCO3dDQUFBLEFBQ0E7QUFEQTtxQkFBQSxrQkFDQSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkYsQUFHRSxBQUNBLEFBR0o7MkJBUEosQUFBTSxBQU9JLEFBRWI7QUFUUyxBQUNGO0FBSFIsQUFBYyxBQVlkLGFBWmM7aURBWVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FRSCxBQUNKO21DQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQThCO0FBQTlCOytCQUE4QixjQUFBOzs4QkFBQTtnQ0FBQSxBQUM5QjtBQUQ4QjtBQUFBLCtCQUM5QixBQUFDO3lCQUFELEFBQ1EsQUFDUjt5QkFGQSxBQUVRLEFBQ1I7c0JBSEEsQUFHSyxBQUNMO3lCQUpBOzs4QkFBQTtnQ0FISixBQUVJLEFBQThCLEFBQzlCLEFBT0M7QUFQRDtBQUNBLHVCQU5SLEFBQ0EsQUFDSSxBQVVLLEFBQUssQUFJakI7Ozs7Ozs7Ozs7Ozt1Q0EzQzRCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QixBQUFoQixBQUF1Qzs7aUNBQTFEO0E7aUVBQ0MsRUFBQyxXLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q2YsQSxBQWpENEI7O2tCQWlENUIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9kZXZpbC92b2x1bWUvbGVhcm5pbmdfcHJvamVjdHMvYmxvY2stY2hhaW4tcHJvamVjdHMva2lja3N0YXJ0ZXIifQ==