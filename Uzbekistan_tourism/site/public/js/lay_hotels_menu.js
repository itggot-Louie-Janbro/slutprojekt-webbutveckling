function lay_hotels_appear() {
    var e = document.getElementsByClassName("lay_menu_h")[0];
        e.style.height = "350px";
        e.style.visibility = "visible";
        e.style.border = "1px solid red";
}

function lay_hotels_disappear() {
    var e = document.getElementsByClassName("lay_menu_h")[0];
        e.style.height = "0px";
        e.style.visibility = "hidden";
}
