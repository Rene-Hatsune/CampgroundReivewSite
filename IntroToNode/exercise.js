//NODE EXERCISE

//Using the command line, create a file "echo.js"
//inside the file, write a function named echo that takes 2 arguments: a astring and a number
// It should print out the string, number of times.

echo("Echo!!!", 10)//should print "Echo!!!" 10 times
echo("Tater Tots", 3)//should print "Tater tots" 3 times

//Add the above 2 examples to the end of you file
//Lastly, run the contents of "echo.js" using node

function echo(str, num){
    for(var i = 0; i < num; i++){
        console.log(str);
    }
};

echo("Echo!!!",10);
echo("Tater Tots", 3);