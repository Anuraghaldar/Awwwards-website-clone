let navButtons = document.querySelectorAll('.nav-buttons__section-button');
let sections = document.querySelectorAll('.content-section');

// buttons click
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        let section = document.getElementById(button.getAttribute('data-section'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// scroll highlights
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        // console.log(sectionTop)

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.id;
        }
    });

    navButtons.forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-section') === currentSection);
    });
});

// hamburger

let menuHamburger = document.querySelector('.menu-hamburger')
let toggleButton = document.querySelector('.toggle-button')

toggleButton.addEventListener('click', () => {
    if (menuHamburger.style.display === 'block') {
        menuHamburger.style.display = 'none';
        document.body.style.overflowY = '';
    } else {
        menuHamburger.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

menuHamburger.style.display = 'none';

// scroll arrow 

let scrollButton = document.querySelector('.scroll-arrow');

window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

scrollButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};