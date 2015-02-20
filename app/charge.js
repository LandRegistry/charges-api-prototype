var uuid = require('node-uuid');
var httpStatus = require('http-status-codes');

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
  }
}
