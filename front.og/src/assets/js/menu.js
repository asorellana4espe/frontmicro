var panel = document.getElementById("contenido_body");
var check = document.getElementById("check");

check.addEventListener("change", function () {
  if (check.checked) {
    panel.classList.add("activo");
  } else {
    panel.classList.remove("activo");
  }
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.getElementById("check").checked = false;
    panel.classList.remove("activo");
  } else {
    document.getElementById("check").checked = true;
    panel.classList.add("activo");
  }
}
var x = window.matchMedia("(max-width: 680px)");
myFunction(x);
x.addListener(myFunction);
