let menuBtn = document.querySelector('.menu-bar');
let navMenu = document.querySelector('nav');

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("fa-times");
});


//Home Slider
new Splide(".splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
}).mount();

//Active Class for nav bar on scroll when we get the correct section
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-bar li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove("active");
        if (li.dataset.link == current) {
            li.classList.add('active');
        }
    });
});

//Loader Function
function loader() {
    document.querySelector('.loader').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 5000);
}

window.onload = fadeOut();