var express = require("express")
var app = express.createServer();
app.get('/', function (req, res) {
    res.send("hellowor");
});
app.listen(3000, function () {
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});
exports.App = app;

