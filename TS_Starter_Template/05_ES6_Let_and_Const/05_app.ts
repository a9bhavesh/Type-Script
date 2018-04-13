/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/

//problem

//var Example

for(var i=0; i<= 10; i++)
{

}
var output = "The Value Of i is : " +i;
document.getElementById('display').innerHTML = output;

//let Example

for(let j=0; j<=10; j++)
{

}
//output = "The Value Of j is : " +j; //CE: variable 'j' not found

// Const Example

const MONTH_NAME = "January";
output = "The Month name is : " + MONTH_NAME;
document.getElementById('display').innerHTML = output;

// MONTH_NAME = "Febuary"; // CE: cannot  assign to a constant value
