/**
 * 
 * "document" is an object created the js execution enviroment 
 *it represents the tree of the web page we are manipulating 
 *in the memory
 *'getElementById' this method is used to obtain an
 *element in the web page by its id
 *
 */
 const start = document.getElementById("start");
 console.log(start);
 console.debug(start);
 const stop = document.getElementById("stop");
 console.log(stop);
 const reset = document.getElementById("reset");
 console.log(reset);
 //retrieve an element that does not exist from the web page 
 const anyElement = document.getElementById("anyElement");
    console.log(anyElement);
    const timerDisplayer = document.getElementById("timerDisplayer");
    console.log(timerDisplayer);
    // start.addEventListener ('event type', 'action')
    start.addEventListener('click', function()  {
        console.debug("start button was jajajjaj");
        start.style.fontSize = "10px"
    });
    function resetbuttonHandler(){
console.debug("reset button was jajajjaj");
    }
     reset.addEventListener('click', function () {
        console.log("reset button was jajajjaj");
    });
    
     stop.addEventListener('click', function () {
        console.log("stop button was jajajjaj");
    });