/*** QUICK VIEW ***/

var qv_closeBtns = $$('.quickview__close-icon');
var quickViewBtns = $$('.popular-product__action-quickview');
var quickViewItem = $('.popular-product__item-quickview');
const qv_plusIcon = $('.quickview-right__cart-quantity-icon.ti-plus');
const qv_minusIcon = $('.quickview-right__cart-quantity-icon.ti-minus');
const qv_quantityProduct = $('.quickview-right__cart-quantity-number');

quickViewBtns.forEach(function(btn, index) {
    btn.onclick = function () {
        $('.quickview__overlay').classList.add('visibility-visible');
        quickViewItem.classList.add('visibility-visible');   
    }
})

qv_closeBtns.forEach(function(closeBtn, index) {
    closeBtn.onclick = function() {
        $('.quickview__overlay').classList.remove('visibility-visible');
        quickViewItem.classList.remove('visibility-visible');
    }
})

$('.quickview__overlay').onclick = function(event) {
    if(!event.target.closest('.popular-product__item-quickview')) {
        $('.quickview__overlay').classList.remove('visibility-visible');
        $('.popular-product__item-quickview.visibility-visible').classList.remove('visibility-visible');
    }
}

var quickviewQuantityNumber = $('.quickview-right__cart-quantity-number');

quickviewQuantityNumber.onblur = function() {
    if (quickviewQuantityNumber.innerText <= 0) {
        quickviewQuantityNumber.innerText = 1;
    }
}

qv_plusIcon.onclick = function() {
    qv_quantityProduct.innerText++;
}

qv_minusIcon.onclick = function() {
    if(qv_quantityProduct.innerText > 1) {
        qv_quantityProduct.innerText--;
    }
}


// Sliderv
    var quickViewLeftElement = $('.popular-product__item-quickview-left');
    if (quickViewLeftElement) {
        var qv_arrowRight = $('.qv-arrow-right');
        var qv_arrowLeft = $('.qv-arrow-left');
        var qvImgItems = $$('.qv-image__item');
        var qvSelectImgs = $$('.qv-select_image');
    
        var qv_currentImage = $('.qv-image__item.qv-image-active').dataset.index;
        
        function addActiveSliderQV(qv_currentImage) {
            qvImgItems[qv_currentImage].classList.add('qv-image-active');
            qvSelectImgs[qv_currentImage].classList.add('qv-select-active');
        }
    
        function removeActiveSliderQV(qv_currentImage) {
            qvImgItems[qv_currentImage].classList.remove('qv-image-active');
            qvSelectImgs[qv_currentImage].classList.remove('qv-select-active');
        }
    
        qv_arrowRight.onclick = function() {
            removeActiveSliderQV(qv_currentImage);
            if(qv_currentImage >= qvImgItems.length - 1) {
                qv_currentImage = -1;
            }       
            ++qv_currentImage;
            addActiveSliderQV(qv_currentImage); 
        }
    
    
        qv_arrowLeft.onclick = function() {
            removeActiveSliderQV(qv_currentImage);
            if(qv_currentImage <= 0) {
                qv_currentImage = qvImgItems.length;
            }
            --qv_currentImage;
            addActiveSliderQV(qv_currentImage); 
        }
    
    
        qvSelectImgs.forEach(function(img, index) {
            img.onclick = function() {
                $('.qv-select_image.qv-select-active').classList.remove('qv-select-active');
                this.classList.add('qv-select-active');
                $('.qv-image__item.qv-image-active').classList.remove('qv-image-active');
                qvImgItems[index].classList.add('qv-image-active');
                qv_currentImage = index;
            }
        });
    }
    