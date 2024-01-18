let moblienavbar = document.getElementById("moblienavbar")
moblienavbar.style.display = "none"
function menufun() {
    if(moblienavbar.style.display=="none"){
        moblienavbar.style.display = "block"
    }
    else {
        moblienavbar.style.display = "none"
    }
}

let body = document.getElementById("body")
let navbar = document.getElementById("navbar")
body.style.backgroundColor = "black"
function darkmode() {
    if(body.style.backgroundColor == "black"){
        body.style.backgroundColor = "white"
    }
    else {
        body.style.backgroundColor = "black"
    }
}