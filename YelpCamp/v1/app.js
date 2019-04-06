var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var campgrounds = [
    {name:"Salmon Creek", image:"https:////c1.staticflickr.com/4/3181/3046178407_55f347c9fe_m.jpg"},
    {name:"Grantite Hill", image:"https:////c1.staticflickr.com/6/5181/5641024448_04fefbb64d_m.jpg"},
    {name:"Mountain Goat's Rest", image:"https:////c1.staticflickr.com/4/3932/34113753285_11378e75e0_m.jpg"},
    {name:"Salmon Creek", image:"https:////c1.staticflickr.com/4/3181/3046178407_55f347c9fe_m.jpg"},
    {name:"Grantite Hill", image:"https:////c1.staticflickr.com/6/5181/5641024448_04fefbb64d_m.jpg"},
    {name:"Mountain Goat's Rest", image:"https:////c1.staticflickr.com/4/3932/34113753285_11378e75e0_m.jpg"},
    {name:"Salmon Creek", image:"https:////c1.staticflickr.com/4/3181/3046178407_55f347c9fe_m.jpg"},
    {name:"Grantite Hill", image:"https:////c1.staticflickr.com/6/5181/5641024448_04fefbb64d_m.jpg"},
    {name:"Mountain Goat's Rest", image:"https:////c1.staticflickr.com/4/3932/34113753285_11378e75e0_m.jpg"}
]; 

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server started!!!");
});