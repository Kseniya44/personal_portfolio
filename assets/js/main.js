// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav =  document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener("click", ()=> {
            nav.classList.toggle("show-menu");
        });
    }else {
        console.log("sdfasdf");
    }
}
showMenu("nav-toggle", "nav-menu");
 
// remove menu toggle

const navLink = document.querySelectorAll(".nav__link");

function linkActiv() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkActiv));

// scroll section active link

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
     
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
        }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    })
}
window.addEventListener("scroll", scrollActive);

// change background header

function scrollHeader() {
    const header = document.getElementById("header");
    if(this.scrollY >= 200) {
        header.classList.add("scroll-header");
    }else {
        header.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll", scrollHeader);

//show scroll top

function scrollTop() {
    const scrollTop = document.getElementById("scrolltop");
    if(this.scrollY >= 560) {
        scrollTop.classList.add("show-scrolltop");
    }else {
        header.classList.remove("show-scrolltop");
    }
}

window.addEventListener("scroll", scrollTop);

//mixup filter portfolio

const mixer = mixitup(".portfolio__container", {
    selectors: {
        target: ".portfolio__content"
    },
    animation: {
        duration: 400
    }
});

// link active portfolio

const linkPortfolio = document.querySelectorAll(".portfolio__item");

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(l => l.classList.remove("active-portfolio"));
        this.classList.add("active-portfolio");
    }
}

linkPortfolio.forEach(l => l.addEventListener("click", activePortfolio));

//swiper carousel

const swiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3
        },
    }
});