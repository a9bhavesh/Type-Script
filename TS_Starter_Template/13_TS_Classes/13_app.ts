// Create a simple class and usage
class Greeter{
	greeting : string;

	constructor(message :string){
		this.greeting = message
	}

    greet(){
    	return "GoodMorning " + this.greeting;
    }
	public get getGreetMessage():string{
		return this.greeting;
	} 

	public set setGreetMessage(message){
		this.greeting = message;
	}
}

let greeter = new Greeter("Roshan");
let output = greeter.greet();

output = greeter.getGreetMessage;

greeter.setGreetMessage = "John";

output = greeter.getGreetMessage;

document.getElementById('display').innerHTML = output;
// add a constructor to a class

// add methods to a class

// add getter and setter methods of a class

// Implement an interface and methods and variables of interface