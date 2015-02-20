var express = require('express'),
    routes = require('./routes.js'),
    bodyParser = require('body-parser'),
    app = express(),
    port = (process.env.PORT || 3000);

app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.set('views', './views');
app.set('layout', 'layouts/default');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));

routes.bind(app);
routes.log(app);

app.listen(port);
console.log('');
console.log('Listening on port ' + port);
console.log('');

