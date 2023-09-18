
/*********  MAIN **********/
    
    /***** SLIDER *****/
        var arrowRight = $('.arrow-right');
        var arrowLeft = $('.arrow-left');
        var imgItems = $$('.slider-item');
        var circleBtns = $$('.circle-btn');

        var currentImage = $('.slider-item.slider-active').dataset.index;

        function addActiveSlider(currentImage) {
            imgItems[currentImage].classList.add('slider-active');
            circleBtns[currentImage].classList.add('circle-active');
        }

        function removeActiveSlider(currentImage) {
            imgItems[currentImage].classList.remove('slider-active');
            circleBtns[currentImage].classList.remove('circle-active');
        }

        arrowRight.onclick = function() {
            removeActiveSlider(currentImage);
            if(currentImage >= imgItems.length - 1) {
                currentImage = -1;
            }       
            ++currentImage;
            addActiveSlider(currentImage); 
        };

        arrowLeft.onclick = function() {
            removeActiveSlider(currentImage);
            if(currentImage <= 0) {
                currentImage = imgItems.length;
            }
            --currentImage;
            addActiveSlider(currentImage); 
        };

        circleBtns.forEach(function(circle, index) {
            circle.onclick = function() {
                $('.circle-btn.circle-active').classList.remove('circle-active');
                this.classList.add('circle-active');
                $('.slider-item.slider-active').classList.remove('slider-active');
                imgItems[index].classList.add('slider-active');
                currentImage = index;
            }
        });

        setInterval(function() {
            removeActiveSlider(currentImage);
            if(currentImage >= imgItems.length - 1) {
                currentImage = -1;
            }       
            ++currentImage;
            addActiveSlider(currentImage);
        }, 4000)
    
    /***** BEST CHOICE *****/

        var sliderElement = $('.slider');
        var bestChoiceElement = $('.best-choice');
        var bestChoiceElements = $$('.best-choice__item');
        var bestChoiceToTop = bestChoiceElement.offsetTop;
        
        window.addEventListener('scroll', function() {
                if(window.scrollY > bestChoiceToTop - window.innerHeight) {
                    var delayTime = 0;
                    bestChoiceElements.forEach(function(bestChoiceItem) {
                        bestChoiceItem.style.animationDelay = delayTime + 's';
                        delayTime = delayTime + 0.2;
                        bestChoiceItem.classList.toggle('animation-fadeInUp', bestChoiceElements);
                    })
                }
            }
        )
    

    /**** BIG CATALOG ****/

        var bigCatalogElement = $('.big-catalog');
        var bigCatalogProductLists = $$('.big-catalog__product-list');
        var bigCatalogTitleMain = $('.big-catalog__main-title');
        
        var bigCatalogToTop = bigCatalogElement.offsetTop + 100;

        // Hiện element khi cuộn scroll
        window.addEventListener('scroll', function() {
                if(window.scrollY > bigCatalogToTop - window.innerHeight) {
                    delayTime = 0;
                    bigCatalogTitleMain.classList.toggle('animation-fadeInUp', bigCatalogTitleMain);
                    bigCatalogProductLists.forEach(function(productList) {
                        productList.style.animationDelay = delayTime + 's';
                        delayTime = delayTime + 0.2;
                        productList.classList.toggle('animation-fadeInUp', bigCatalogProductLists);
                })
            }
        })

    /***** POPULAR PRODUCTS *****/

        var popularProductTitleMain = $('.popular-product__main-title');
        var ppElements = $$('.popular-product__wrap-border');
        var popularProductElement = $('.popular-product');
        var popularProductToTop = popularProductElement.offsetTop;

        // Hiện element khi cuộn scroll
            window.addEventListener('scroll', function() {
                    if(window.scrollY > popularProductToTop - window.innerHeight) {
                        var delayTime = 0;
                        popularProductTitleMain.classList.toggle('animate-fadeIn', popularProductTitleMain);
                        ppElements.forEach(function(element) {
                            element.classList.toggle('animate-fadeIn', element);
                            element.style.animationDelay = delayTime + 's';
                            delayTime = delayTime + 0.15;
                    })
                }
            })
            
    
    



    

    



        

    
