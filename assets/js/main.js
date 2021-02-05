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

const sections = document.querySelectorAll("section.id");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        secionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        }else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");

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