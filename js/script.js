window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_second_list'),
    menuItem = document.querySelectorAll('.header_second_item'),
    hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('header_second_list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('header_second_list_active');
        })
    })
})