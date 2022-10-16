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
var btt = document.getElementById("back-to-top"),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrolpos, docHeight;

// calculating the document height 
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != "undefined") {
    offset = docHeight / 4;
}

// another event listener 
window.addEventListener("scroll", visible);

// add the class name visible to the button 
function visible() {
     scrolpos = body.scrollTop || docElem.scrollTop;

    if (scrolpos > offset) {
        btt.className = "visible";
    }
    else {
        btt.className = ""
    }
    
}






