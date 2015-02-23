
var explorer = module.exports = {
  renderPage : function (req, res) {
    var path = (req.params[0]);

    res.render(path, function(err, html) {
      if (err) {
        console.log(err);
        res.send(404);
      } else {
        res.end(html);
      }
    });
  },
  index : function (req, res) {
    res.render("index");
  },
  enactDemo : function (req, res) {
    res.render("enact/index", {layout: 'layouts/enact'});
  }
}
