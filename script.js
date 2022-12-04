window.onload = function () {
    const menu_btn = document.querySelector('.hamburger')
    const mobile_menu = document.querySelector('.mobile-nav')
    const promotion_button = document.querySelector('.buy-album')

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active')
        mobile_menu.classList.toggle('is-active')
        promotion_button.classList.toggle('is-active')
    });

    //Handle Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
}









