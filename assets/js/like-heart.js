/*** Label & Heart ***/
    
const labelProducts = $$('.popular-product__item-label');
labelProducts.forEach(function(label) {
    const tg = label.classList[1];
    switch(tg) {
        case 'label-sale':
            label.innerHTML = 'Sale';
            break;
        case 'label-hot':
            label.innerHTML = 'Hot';
            break;
        case 'label-new':
            label.innerHTML = 'New';
            break;
        case 'label-discount':
            label.innerHTML = `- ${label.dataset.discount}%`;
            break;
    }
})

const heartLabels = $$('.rate_heart');
heartLabels.forEach(function(label) {
    label.onclick = function() {
        label.classList.toggle('heart--liked');
    }
});