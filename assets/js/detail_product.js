var buttonColors = $$('.product-info__color-button');

buttonColors.forEach(function(button) {
    button.onclick = function() {
        $('.product-info__color-button.button-info_active').classList.remove('button-info_active');
        button.classList.add('button-info_active');
    }
})

// Chuyển detail khi click button

var buttonDetailProducts = $$('.detail-menu__btn');
var productInfoContentElements = $$('.product-info__detail-content');

buttonDetailProducts.forEach(function(button, index) {
    button.onclick = function() {
        $('.detail-menu__btn.btn-active').classList.remove('btn-active');
        $('.product-info__detail-content.detail-active').classList.remove('detail-active');
        button.classList.add('btn-active');
        productInfoContentElements[index].classList.add('detail-active');
    }
})