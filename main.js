const navBurger = document.getElementById("hamburger");
const loopstudioNav = document.getElementsByClassName("nav");
const navAnimation = document.getElementsByClassName('.active')
const xIcon = document.getElementById("x");

let navbarDisplay = () => {
    if(window.innerWidth < 1000){
        navBurger.style.display = "none";
    } else {
        navBurger.style.display = "block";
    }
}

// let navbarAnimation = () => {
//     if(navBurger === "click"){
//         document.getElementsByClassName("active").style.display = "block";
//     }
// }

navBurger.addEventListener("click", () => {
    navBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// if (active is up then make x appear on the screen. If not then keep it none)
function navbarClose(){
    if (navMenu.classList.contains("active")) {
        // If the 'active' class is present, hide the menu and 'x' icon
        navMenu.classList.remove("active");
        xIcon.style.display = "none";
      } else {
        // If the 'active' class is not present, show the menu and 'x' icon
        navMenu.classList.add("active");
        xIcon.style.display = "block";
      }
}



document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    navBurger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// let navSlider = () => {
//     slider.style.animation = 'slider-menu 2s forwards ease-in-out';
// }