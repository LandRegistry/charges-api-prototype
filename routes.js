var explorer = require('./app/explorer.js');
var charge = require('./app/charge.js');

module.exports = {
  bind : function (app) {
    app.post('/charge', charge.createCharge);
    app.get('/charge/:id', charge.chargeSignatures);
    app.post('/charge/:id/:date', charge.dateCharge);

    app.get('/', explorer.index);
    app.get(/^\/([^.]+)$/, explorer.renderPage);
  },
  log : function (app) {
    var routes = app.routes;
    for (var verb in routes){
      if (routes.hasOwnProperty(verb)) {
        routes[verb].forEach(function(route){
          console.log(verb + " " +route['path']);
        });
      }
    }
  }
};
