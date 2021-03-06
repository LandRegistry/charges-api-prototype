var uuid = require('node-uuid');
var httpStatus = require('http-status-codes');
var moment = require('moment');

module.exports = {
  createCharge : function (req, res) {
    var borrowers = req.body.borrowers.map(function (borrower) {
      return {
        'name': borrower.first_name + borrower.last_name,
        'signed': false
      }
    });
    res.statusCode = 201;
    res.write(JSON.stringify({
      'id': uuid.v4(),
      'borrowers': borrowers
    }));
    res.end();
  },
  chargeSignatures : function (req, res) {
    var json = {
      'id' : req.params.id || uuid.v4(),
      'borrowers' : [
        { 'name' : 'Jane Smith', 'signed': true },
        { 'name' : 'John Smith', 'signed': false },
      ]
    }
    res.statusCode = 200;
    res.write(JSON.stringify(json));
    res.end();
  },
  dateCharge: function (req, res) {
    var date = moment(req.params.date) || moment();
    var json = {
      'id' : req.params.id || uuid.v4(),
      'date' : date.format('YYYY-MM-DD')
    }
    res.statusCode = 200;
    res.write(JSON.stringify(json));
    res.end();
  }
}
