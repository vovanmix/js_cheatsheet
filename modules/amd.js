
//define:
define('myModule',
    ['math', 'graph'],
    function(math, graph) {

        // Note that this is a slightly different pattern
        // With AMD, it's possible to define modules in a few
        // different ways due as it's relatively flexible with
        // certain aspects of the syntax
        return {
            plot: function(x, y) {
                return graph.drawPie(math.randomGrid(x, y));
            }
        };
    }
);



//use:
require(['app/myModule'],
    function(myModule) {
    // start the main module which in-turn
    // loads other modules
    var module = new myModule();
    module.doStuff();
});
