document.addEventListener('DOMContentLoaded', () => {
    // Declare DOM elements
    const navBar = document.querySelector('.header-navbar'),
          searchBar = document.querySelector('.header-searchbar'),
          openSearchbutton = document.querySelector('#open-search'),
          closeSearchbutton = document.querySelector('#close-search'),
          burgeropenButton = document.querySelector('#burger-open');
    // Declare variables
    // let

    // Initialize slider
    const swiper = new Swiper('.swiper', {
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Open search-bar
    openSearchbutton.addEventListener('click', () => {
        if (navBar.classList.contains('opened')) navBar.classList.remove('opened');
        navBar.classList.add('navbar-outed');
        navBar.classList.add('_hidden');
        if (searchBar.classList.contains('searchbar-outed')) searchBar.classList.remove('searchbar-outed');
        searchBar.classList.remove('_hidden');
        searchBar.classList.add('opened');
    });
    // Close search-bar
    closeSearchbutton.addEventListener('click', () => {
        if (searchBar.classList.contains('opened')) searchBar.classList.remove('opened');
        searchBar.classList.add('searchbar-outed');
        searchBar.classList.add('_hidden');
        if (navBar.classList.contains('navbar-outed')) navBar.classList.remove('navbar-outed');
        navBar.classList.remove('_hidden');
        navBar.classList.add('opened');
    });

    // Open Burger
    burgeropenButton.addEventListener('click', () => {

    });
    // Close burger
    // ...
})