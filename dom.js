//depth-first pre-order traversal of the document's nodes
var body = document.querySelector('body');

var el = document.querySelector("div.user-panel.main input[name=login]");




document.getElementById("MyElement").className = "MyClass";



var p = document.createElement("p");
document.body.appendChild(p);


//remove from DOM
p.remove();


// Removing a specified element without having to specify its parent node
var node = document.getElementById("nested");
if (node.parentNode) {
    node.parentNode.removeChild(node);
}




// Removing all children from an element
var element = document.getElementById("top");
while (element.firstChild) {
    element.removeChild(element.firstChild);
}



// Insert the new element into the DOM before sp2
parentDiv.insertBefore(sp1, sp2);



parentDiv.replaceChild(sp1, sp2);




node.hasChildNodes();



document.body.childNodes;



p.hasAttribute('style');



//array
p.attributes;


p.getAttribute('class');


p.setAttribute('data-id', 12323);