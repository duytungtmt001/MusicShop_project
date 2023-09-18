var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var headerNode = $('.header');
var headerWrap = $('.header-wrap');
var headerCategoryBot = $('.header__bot-category');
var headerCategoryBotList = $('.header__bot-category-list');
var headerCategoryBotBtn = $('.header__bot-category-btn');
var headerBot = $('.header__bot');
var headerHeight = headerNode.offsetHeight;
var arrowUp = $('.category__btn-arrow-up');
var arrowDown = $('.category__btn-arrow-down');
var mainElement = $('.main')


/******** HEADER *********/

    // Khi click Danh mục sản phẩm
    headerCategoryBotBtn.onclick = function() {
        headerCategoryBotList.classList.toggle('display--none');
        arrowDown.classList.toggle('display--none');
        arrowUp.classList.toggle('display--none');
    }

    // Ẩn DMSP khi click ra ngoài
    document.onclick = function(event) {
        if(!event.target.closest('.header__bot-category')) {
            if(!headerCategoryBotList.classList.contains('display--none')) {
                headerCategoryBotList.classList.add('display--none');
                arrowDown.classList.toggle('display--none');
                arrowUp.classList.toggle('display--none');
            }
        }
    }
    
    // Khi click Khu vực Location
    var locationHeaderButton = $('.header__top-location-header');
    var locationHeaderList = $('.header__top-location-list');
    locationHeaderButton.onclick = function() {
        locationHeaderList.classList.toggle('display--none');
    }

    // Ẩn Location List khi click ra ngoài
    document.addEventListener('click', function(event) {
        if(!event.target.closest('.header__top-location-wrap')) {
            if(!locationHeaderList.classList.contains('display--none')) {
                locationHeaderList.classList.add('display--none');
            }
        }
    })

    // Hiện header bot khi cuộn scroll  
    window.addEventListener('scroll', function() {
            if(window.scrollY >= headerHeight - 30) {  
                headerBot.classList.toggle('fadeDownHeader', headerBot);

            } else {
                headerBot.classList.remove('fadeDownHeader');
            }
        }
    )  

    // Back to top
    var buttonBack = $('.back-to-top');
    window.addEventListener('scroll', function() {
        if(window.scrollY >= headerHeight) {  
            buttonBack.classList.toggle('visibility-visible', buttonBack);
        } else {
            buttonBack.classList.remove('visibility-visible');
        }
    })


    buttonBack.onclick = function() {
        setTimeout(function() {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        }, 200)
    }

/******* HEADER MOBILE ******/


var headerMobileElement = $('.header__mobile');
var headerMobileBarIcon = $('.header__top-bar');
var overlayMobile = $('.header__top-overlay');
var headerMobileMenuElement = $('.header__mobile-menu');
var closeHeaderMobileIcon = $('.header__mobile-menu-top-icon');

headerMobileBarIcon.onclick = function() {
    headerMobileMenuElement.classList.add('visibility-mobile');
    overlayMobile.classList.add('visibility-visible'); 
}

var menuMobileListElements = $$('.mobile__menu-category');
menuMobileListElements.forEach(function(element) {
    const menuMobileHead = element.parentElement.querySelector('.mobile__menu-head');
    const menuMobileCategoryHeight = element.offsetHeight;
    element.style.height = 0;
    menuMobileHead.onclick = function() {
        if(element.style.height == '0px') {
            const menuMobileCategoryActive = $('.mobile__menu-category.active');
            if(menuMobileCategoryActive) {
                menuMobileCategoryActive.classList.remove('active');
                menuMobileCategoryActive.style.height = 0;
            }
            element.style.height = menuMobileCategoryHeight + 'px'; 
            element.classList.add('active');
        } else {
            element.style.height = 0;
            element.classList.remove('active');
        }
    }
})

function hideHeaderMobileMenu() {
    headerMobileMenuElement.classList.remove('visibility-mobile');
    overlayMobile.classList.remove('visibility-visible');
}

overlayMobile.addEventListener('click', function(){
    hideHeaderMobileMenu();
    
});

closeHeaderMobileIcon.addEventListener('click', function(){
    hideHeaderMobileMenu();
})


// Hiện header mobile khi scroll

    var mainToTop = mainElement.offsetTop;
    window.addEventListener('scroll', function() {
        if(window.scrollY >= mainToTop) {  
                headerNode.classList.toggle('fadeDownHeaderMobile', headerNode);
            } else {
                headerNode.classList.remove('fadeDownHeaderMobile');
            }
        }
    )  
    

