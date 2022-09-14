const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const scrollToTop = document.querySelector('.scrollToTop');

menu.addEventListener('click', () =>{
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
});

scrollToTop.addEventListener('click', () =>{
    window.scrollTo({top: 0});
});

window.addEventListener("scroll", () => {
    window.pageYOffset > 100
      ? (scrollToTop.style.display = "block")
      : (scrollToTop.style.display = "none");
});