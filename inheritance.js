if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

String.prototype.wrap = function(tag){
    return "<{0}>{1}</{0}>".format(tag, this);
}


///####@@@ OBJECT CREATION @@@####

//### 1. CONSTRUCTOR ###
//constructor function
function Graph(){
    this.vertices = [];
    this.edges = [];
}
//prototype "class" attached to the constructor
Graph.prototype = {
    addVertex: function(v){
        this.vertices.push(v);
    }
};

var g = new Graph();
g.addVertex();

console.log(typeof g); //object
console.log(g instanceof Graph); //true


//### 2. WITH Object.create ###
var a = {a: 1};
var b = Object.create(a);

//property shadowing(override)
b.a = 2;
//assing property to a and it's still visible in b; b doesn't own/store that property but can read it
a.b = 'bbb';

console.log(b.b);

//Graph(), String() etc are constructors. They have a prototype property which is used by instances defined with a new kwd


//### 3. With a factory
function Car (make, model, color) {
    var self = {
        make: make,
        model: model,
        color: color,
        paint: function(color){
            self.color = color;
        }
    };
    return self;
}

var myCar = Car();

//### 4. With the class keyword ES6 ###
//this is just a wrapper above constructor prototype
class Polygon {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(side_length){
        super(side_length, side_length);
    }
    get area(){ //getter function
        return this.height * this.width;
    }
    set sideLength(new_length){
        this.width = new_length;
        this.height = new_length;
    }
}

var square = new Square(2);


// typeof
console.log([] instanceof Array); //true
var z = new String("hi");
console.log(z instanceof String); //true


