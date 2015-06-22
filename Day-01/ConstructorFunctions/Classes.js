function Spinner(){
    var count = 0;
    this.up = function(){ return ++count; };
    this.down = function(){ return --count; };
}


function getSpinner(){
    var count = 0;
    return {
        up : function(){ return ++count; },
        down : function(){ return --count; }
    }
}
