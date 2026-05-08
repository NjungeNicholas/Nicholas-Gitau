function switchTheme(){
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", function() {
    const saved = localStorage.getItem("theme");
    // Default to dark if nothing saved yet
    if(saved !== "light"){
        document.body.classList.add("dark-mode");
    }
});

function toggleMenu(){
    var x = document.getElementById("navigation");
    if(x.className === "topnav"){
        x.className += " responsive";}else{
            x.className = "topnav";
        }
}