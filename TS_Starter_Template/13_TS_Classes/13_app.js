// Create a simple class and usage
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "GoodMorning " + this.greeting;
    };
    Object.defineProperty(Greeter.prototype, "getGreetMessage", {
        get: function () {
            return this.greeting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Greeter.prototype, "setGreetMessage", {
        set: function (message) {
            this.greeting = message;
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
var greeter = new Greeter("Roshan");
var output = greeter.greet();
output = greeter.getGreetMessage;
greeter.setGreetMessage = "John";
output = greeter.getGreetMessage;
document.getElementById('display').innerHTML = output;
// add a constructor to a class
// add methods to a class
// add getter and setter methods of a class
// Implement an interface and methods and variables of interface
