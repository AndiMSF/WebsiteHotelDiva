// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})

// Open close FAQ

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

         // Change icon
    const icon = faq.querySelector('.faq__icon i')

    if(icon.className === 'uil uil-plus'){
        icon.className = 'uil uil-minus'
    } else {
        icon.className = 'uil uil-plus';
    }
    })

   
})

// Slider

var siper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // width >= 600px
    breakpoints: {
        600: {
            slidesPerView: 2
        }
    }
});

// Show/Hide nav menu
const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

// Show function
function showNav () {
    menu.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
}

openBtn.addEventListener('click', showNav);

// Hide function

function hideNav () {
    menu.style.display = 'none';
    openBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}

closeBtn.addEventListener('click', hideNav);