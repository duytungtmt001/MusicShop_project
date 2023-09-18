/****** FOOTER *******/
    
    // Hiện element khi cuộn scroll

    var footerMidElement = $('.footer__mid');
    var footerMidItems = $$('.footer__mid-list');
    var footerMidToTop = footerMidElement.offsetTop;
    window.addEventListener('scroll', function() {
        if(window.scrollY > footerMidToTop - window.innerHeight) {
            var delayTime = 0.1;
            footerMidItems.forEach(function(item) {
                item.style.animationDelay = delayTime + 's';
                delayTime = delayTime + 0.1;
                item.classList.toggle('animation-fadeInUp', item);
        })
    }
})