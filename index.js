function switchTheme(){
    document.body.classList.toggle("dark-mode");
}
function toggleMenu(){
    var x = document.getElementById("navigation");
    if(x.className === "topnav"){
        x.className += " responsive";}else{
            x.className = "topnav";
        }
}