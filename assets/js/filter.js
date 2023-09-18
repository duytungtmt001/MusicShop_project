var categoryFilterElement = $('.category__filter');
var catalogFilterToTop = categoryFilterElement.offsetTop;

window.addEventListener('scroll', function() {
    if(window.scrollY > catalogFilterToTop - window.innerHeight) {
        categoryFilterElement.classList.toggle('animate-fadeInRight', categoryFilterElement);
    }
})