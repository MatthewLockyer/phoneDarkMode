var clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true)
      return 'touchstart';
    else
      return 'click';
})();







const navSlide = () => {
    const burgerMenu = document.querySelector('.burgerMenu');
    const navLinks = document.querySelector('.navLinks');
    const navLink = navLinks.querySelectorAll('li')
    
    // TOGGLE NAV
    burgerMenu.addEventListener(clickEvent, () => {
        navLinks.classList.toggle('navLinksShow')
        burgerMenu.classList.toggle('menuOpen')

        navLink.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }  else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        })
    })
}


// EITHER CLICKS OR TOUCHSTARTS DEPENDING ON DEVICE
var clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true)
      return 'touchstart';
    else
      return 'click';
})();



var item = document.querySelectorAll('.item');

item.forEach((select) => {

        select.addEventListener(clickEvent, () => {

            item.forEach((button) => {
                button.classList.remove('selectedItem')
            })

            select.classList.add('selectedItem')

        })
})















const app = () => {
    navSlide()
}

app()