
var event2 = new Event('xEvent');

var event = new CustomEvent('my', {'detail': (new Date()).toISOString()});

document.addEventListener('my', function(e){console.log(e)});

document.dispatchEvent(event);




function handler(e){
    console.log(e);
}

document.addEventListener('xEvent', handler);

document.dispatchEvent(new Event('xEvent'));

document.removeEventListener('xEvent', handler);





