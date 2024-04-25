const nav = document.querySelector(".container-fluid");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = "white";
        nav.style.boxShadow = "0px 0px 10px 10px rgba(176, 176, 176, 0.3)";
        nav.style.position = "fixed";
        nav.style.transition = "background-color 0.2s ease, box-shadow 0.2s ease"
        
    } else {
        nav.style.backgroundColor = "white";
        nav.style.boxShadow = "none";
        nav.style.position = "fixed";
        nav.style.transition = "background-color 0.2s ease, box-shadow 0.2s ease";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        links.forEach(function(innerLink) {
          innerLink.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
});

$(document).ready(function() {
    $('.bestseller .team-slider').owlCarousel({
        loop: true,
        nav: false,
        margin: 5,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 },
        }
    });

    $('.testimonial-box .team-slider').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        margin: 20,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            991: { items: 3 },
        }
    });
});
