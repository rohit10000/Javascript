/*
Anonymous functions

var x = function(arg1)
{
    alert("something");
}

x();

*/

//###############

/*
function test(f, arg1){

    f(4 + arg1);
}

test(
    function(x){
        alert("sample" + x);
    }, 20
);*/

var hi = function(type){

    if(type === "boss")
        return function(name){
            alert("Hi boss, " + name);
        };
    else
        return function(name){
            alert("Hi, " + name);
        };
}

var returnedFunction = hi("boss");

returnedFunction("Arek");

returnedFunction();