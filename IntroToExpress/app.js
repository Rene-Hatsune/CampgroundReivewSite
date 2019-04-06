//ROUTES
var express = require('express');
var app = express();

// "/" =>" Hi there!"bye!"
app.get("/",function(req,res){
    res.send("Hi there!");
});

// "/dog" =>"MEOW!"
app.get("/dog", function(req,res){
   res.send("Meow!"); 
});

// "/bye" => "Goodbye"
app.get("/bye", function(req,res){
   res.send("Goodbye!!"); 
});

app.get("/r/:sburedditName",function(req,res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the "+ subreddit.toUpperCase() +" subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req,res){
 res.send("Welcome to a comment page!");
    
});

//If enter anything
app.get("*", function(req,res){
    res.send("You are a star!!!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});