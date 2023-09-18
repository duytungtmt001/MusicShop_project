var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var catalogNode = $('.catalog')
var arrangeQuantity = $('.arrange-quantity');
var arrangeFeatured = $('.arrange-featured');
var arrangeQuantityList = $('.arrange-quantity__list');
var arrangeFeaturedList = $('.arrange-featured__list');

function showingList(list_wrap, list) {
    list.style.top = list_wrap.offsetHeight + 'px';
    list.classList.toggle('visibility-visible');
}

arrangeQuantity.addEventListener('click', function() {
    showingList(arrangeQuantity, arrangeQuantityList)
})

arrangeFeatured.addEventListener('click', function() {
    showingList(arrangeFeatured, arrangeFeaturedList)
})

document.addEventListener('click', function(event) {
    if(!event.target.closest('.arrange-quantity')) {
        if(arrangeQuantityList.classList.contains('visibility-visible')) {
            arrangeQuantityList.classList.remove('visibility-visible');
        }
    }
}) 
    
document.addEventListener('click', function(event) {
    if(!event.target.closest('.arrange-featured')) {
        if(arrangeFeaturedList.classList.contains('visibility-visible')) {
            arrangeFeaturedList.classList.remove('visibility-visible');
        }
    }
})

var breadcrumbNode = $('.breadcrumb');
var catalogNodeToTop = catalogNode.offsetTop;

var catalogProductElement = $('.category__product');

window.addEventListener('scroll', function() {
    if(window.scrollY > catalogNodeToTop - window.innerHeight) {
        catalogProductElement.classList.toggle('animate-fadeInLeft', catalogProductElement);
    }
})

var headerBotHeight = $('.header__bot').offsetHeight + 12;
var categoryFilterSelectNode = $('.category__filter-select-wrap');
var categoryFilterPosterNode = $('.category__filter-poster');
var categoryFilterSelectNodeHeight = headerBotHeight + categoryFilterSelectNode.offsetHeight;
categoryFilterSelectNode.style.top = headerBotHeight + 'px';

    // Product Status

    const statusProducts = $$('.product-status');
    statusProducts.forEach(function(status) {
        const tg = status.classList[1];
        switch(tg) {
            case 'status--available':
                status.innerText = 'Còn hàng';
                break;
            case 'status--contact':
                status.innerText = 'Liên hệ';
                break;
            case 'status--out':
                status.innerText = 'Hết hàng';
                break;
        }
    })