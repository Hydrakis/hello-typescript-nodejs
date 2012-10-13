import express = module("express")

class Greeter {
   constructor() { }
   greet() {
       return "hello world.";
   }
};

var app = express.createServer();

app.get('/', function (req, res) {
    var greeter = new Greeter();
    res.send(greeter.greet());
});

app.listen(3000, function(){
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});

export var App = app; 