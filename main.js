const navBurger = document.getElementById("hamburger"),
    xIcon = document.getElementById("x"),
    loopstudioNav = document.getElementsByClassName("nav");

    toggleMenu.addEventListener('click',() => {
        navBurger.classList.toggle('show')
    });

// const navAnimation = document.getElementsByClassName('.active')

// let navbarDisplay = () => {
//     if(window.innerWidth < 1000){
//         navBurger.style.display = "none";
//     } else {
//         navBurger.style.display = "block";
//     }
// }

// navBurger.addEventListener("click", () => {
//     navBurger.classList.toggle("active");
//     loopstudioNav.classList.toggle("active");
//     xIcon.classList.toggle("active");
// })




// xIcon.addEventListener("click", () => {
//     navBurger.classList.remove("active");
//     navMenu.classList.remove("active");
//     overlay.classList.remove("active"); // Remove the overlay when the 'x' icon is clicked
// });
