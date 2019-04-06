var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/cat_app");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//Adding one cat to database
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

var george = new Cat({
    name: "Mrs.Norris",
    age: 7,
    temperament: "Evil"
});

george.save(function(err, cat){
    if(err){
        console.log("SOMETHING WENT WRONG!!!");
    } else {
        console.log("WE JUST SAVED A CAT!");
        console.log(cat);
    }
});

Cat.create({
    name: "Snow White",
    age: 15, 
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//Retrive all cats from Database
Cat.find({},function(err, cats){
    if(err){
        console.log("OH NO, THERE IS AN ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS......");
        console.log(cats);
    }
});