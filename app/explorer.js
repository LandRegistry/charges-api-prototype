
var explorer = module.exports = {
  index : function (req, res) {
    res.render("index", { "name": "World!", "title" : "Hello World!" });
  }
}
