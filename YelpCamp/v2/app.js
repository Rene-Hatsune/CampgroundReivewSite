var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String, 
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name:"Salmon Creek", 
//     image:"https:////c1.staticflickr.com/4/3181/3046178407_55f347c9fe_m.jpg",
//     description: "This is a huge granite hill. No bathroom, no water. Beautiful granite!"
//     }, 
//     function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly Created: ");
//             console.log(campground);
//         }
// });

// var campgrounds = [
//     {name:"Salmon Creek", image:"https:////c1.staticflickr.com/4/3181/3046178407_55f347c9fe_m.jpg"},
//     {name:"Grantite Hill", image:"https:////c1.staticflickr.com/6/5181/5641024448_04fefbb64d_m.jpg"},
//     {name:"Mountain Goat's Rest", image:"https:////c1.staticflickr.com/4/3932/34113753285_11378e75e0_m.jpg"},
//     {name:"Salmon Creek", image:"https:////c1.staticflickr.com/4/3181/3046178407_55f347c9fe_m.jpg"},
//     {name:"Grantite Hill", image:"https:////c1.staticflickr.com/6/5181/5641024448_04fefbb64d_m.jpg"},
//     {name:"Mountain Goat's Rest", image:"https:////c1.staticflickr.com/4/3932/34113753285_11378e75e0_m.jpg"},
//     {name:"Salmon Creek", image:"https:////c1.staticflickr.com/4/3181/3046178407_55f347c9fe_m.jpg"},
//     {name:"Grantite Hill", image:"https:////c1.staticflickr.com/6/5181/5641024448_04fefbb64d_m.jpg"},
//     {name:"Mountain Goat's Rest", image:"https:////c1.staticflickr.com/4/3932/34113753285_11378e75e0_m.jpg"}
// ]; 

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){ 
    // GET ALL CAMPGROUND FROM DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index",{campgrounds: allCampgrounds});
        }
    });
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    
    //create a new campground and save it to database
    Campground.create(newCampground, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
       }
    });
    // campgrounds.push(newCampground);

});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

//SHOW
app.get("/campgrounds/:id", function(req, res){
    //find campground with provided id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server started!!!");
});