var yourNamespace = {

    foo: function() {
    },

    bar: function() {
    }
};


yourNamespace.foo();


(function(a, b, c) {
    console.log(a, b, c);
})('aa', 'bb', 'cc');
