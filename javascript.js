/////////////////////////////////////////////DECLARE
let btn_menu = document.querySelector("i#menu-icon");
let isVisible = true;

////////////////////////////////////////////CODE
//show and hide menu
btn_menu.addEventListener("click", menu);
// detect window sie to modify paragraph
changeP();
// apply changes automatically
window.addEventListener("resize", changeP);

////////////////////////////////////////FUNCTIONS
function menu() {
  let tab = document.querySelector("#menu-t");

  console.log("me");
  // condition
  if (isVisible) {
    tab.style.display = "block";
    // hide menu when touching anywhere else
    document.addEventListener("touchstart", function (event) {
      if (tab.style.display === "block" && !tab.contains(event.target)) {
        tab.style.display = "none";
        isVisible = false;
      }
    });
  } else {
    tab.style.display = "none";
    isVisible = true;
  }
}
function changeP() {
  let p1 = document.querySelector(".l-side");
  let width = window.innerWidth;
  // condition
  if (width <= 830) {
    // change the first child text
    p1.children[0].innerHTML = "Papa Amadou";
  } else {
    p1.children[0].innerHTML = "Papa Amadou&#160;&#160;&#160;&#160;|";
  }
}
