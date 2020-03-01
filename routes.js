const routes = module.exports = require('next-routes')();
routes
.add('/campaigns/new','/campaigns/new')
.add('/campaigns/:address','/campaigns/show')
.add('/campaigns/:address/requests','/campaigns/requests/index')
.add('/campaigns/:address/new','/campaigns/requests/new');


module.exports = routes;