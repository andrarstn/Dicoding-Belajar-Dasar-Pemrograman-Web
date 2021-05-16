const hamburger = document.querySelector("#hamburger");
const btnLearnMore = document.querySelector("#btn-learn-more");
const navLink = document.querySelector("#nav-link");

window.addEventListener("scroll", function() {
    if (navLink.classList.contains("hidden-nav")) {
        navLink.classList.remove("hidden-nav")
    }
    
    if (!navLink.classList.contains("nav-links")) {
        navLink.classList.add("nav-links")
    }
})

window.addEventListener("resize", function() {
    if (window.screen.width > 576) {
        if (navLink.classList.contains("hidden-nav")) {
            navLink.classList.remove("hidden-nav")
        }
        
        if (!navLink.classList.contains("nav-links")) {
            navLink.classList.add("nav-links")
        }
    }
});

hamburger.addEventListener("click", function() {
        navLink.classList.toggle("hidden-nav")
        navLink.classList.toggle("nav-links")
})

btnLearnMore.addEventListener("click", function() {
    window.location="#about";
})