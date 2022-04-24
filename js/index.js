function myFuntion() {
    var element = document.getElementById("content");
    var mainBody = document.body;
    var link = document.getElementById("link");
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    mainBody.classList.toggle("body-dark-mode");
    element.classList.toggle("dark-mode");
    link.classList.toggle("link-dark-mode");
    link1.classList.toggle("link-dark-mode");
    link2.classList.toggle("link-dark-mode");
}
onclick="myFunction()"


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display==="block") {
            panel.style.display ="none";
        } else {
            panel.style.display ="block";
        }
    });
}