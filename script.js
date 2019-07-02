//function

//jquery is the framework for many useful function in javascript
var a = 5;//global var    :: Point (1)

//see after removing 'a' as parameter.
function test(a){//a is local variable here

    a = 3;      // ::Point (2)
    alert(a);
}

test();

alert("a: " + a);

//Suppose, we have not declared the global variable and also we have not
// passed the variable as a parameter to the test function, then the varible
//will be treated as a global variable at point (2).


