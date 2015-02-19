var explorer = require('./app/explorer.js');

module.exports = {
  bind : function (app) {
    app.get('/', explorer.index);
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
