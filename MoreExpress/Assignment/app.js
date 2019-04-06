//Express Routing Assignment

var express = require('express');
var app = express();

app.get("/", function(req, res){
   app.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/pig", function(req, res){
   app.send("The pig says 'Oink'!"); 
});

app.get("/speak/cow", function(req, res){
   app.send("The cow says 'Moo'!"); 
});

app.get("/speak/dog", function(req, res){
   app.send("The dog says 'Woof Woof!'"); 
});

app.get("/speak/:animal", function(req, res){
   var sounds = {
       pig: "Oink",
       cow:"Moo",
       dog:"Woof Woof!",
       cat:"I hate you human",
       goldfish:"..."
   } 
   var animal = req.params.animal.toLowerCase();
   var sound = sounds[animal];
   res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:times", function(req, res){
    var word = req.params.word;
    var times = Number(req.params.times);
    var result = "";
    
    for(var i = 0; i < times; i++){
        result += word + " ";
    }
   app.send(result); 
});

app.get("*", function(req, res){
   app.get("Sorry, page not found... What are you doing with your life?") 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started.");
});

//npm init
//npm install express --save