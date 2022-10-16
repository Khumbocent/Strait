// displaying the toggle menu on small screen


var menu__items = document.getElementById("menu__items");
menu__items.style.maxHeight = "0px";

// opening and closing menu
function menu__toggle() {
    if (menu__items.style.maxHeight == "0px") {
        menu__items.style.maxHeight = "200px";
    }
    else {
        menu__items.style.maxHeight = "0px";
    }   
}


// variables of the button 
var backtotop = document.getElementById("back-to-top"),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrolpos, docHeight;

// calculating the document height 
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != "undefined") {
    offset = docHeight / 4;
}

// listen to scroll event 
window.addEventListener("scroll", showButton());

// get the scroll position 
scrolpos = body.scrollTop || docElem.scrollTop;

// set the class name visible to the button 
function showButton(event) {
    
    if (scrolpos > offset) {
        backtotop.className = "visible"
    } 
    else {
        backtotop.className = "";
    }   
}







