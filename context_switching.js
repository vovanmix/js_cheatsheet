var sayHello = function() {
    return "Hello, I'm " + this.name + " and I'm " + this.age + " years old.";
};

//1) with an object
var person = {
    name: "John",
    age: 10
};

person.sayHello = sayHello;
person.sayHello();

//2) with call()
sayHello.call(person);

//3) with bind()
sayHello.bind({name: "Marvin", age: 111})();


// the scope of a function is always the context in which it executes, not the context in which it was defined



