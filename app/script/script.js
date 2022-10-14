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


var btn = document.getElementById("btn");

// btn.addEventListener("click", function (event) {
//     alert("hey i have been clicked");
// }
// );
 
btn.addEventListener("click", message);
function message(event) {
    prompt("hey put your name here");
};

