/***** DAILY BEST DEALS *****/

var bestDealsElement = $('.best-deals');
var bestDealsTitleMain = $('.best-deals__main-title');
var bestDealsItems = $$('.best-deals__wrap');
const clockElements = $$('.best-deals__wrap-clock');
const secondNodes = $$('.clock-countdown.second');
const minutesNodes = $$('.clock-countdown.minutes');
const hourNodes = $$('.clock-countdown.hour');
var secondTime = [10, 25, 48,20];
var minutesTime = [57, 11, 24,20];
var hourTime = [40, 16, 12,20];

// Hiện element khi cuộn scroll
    var bestDealsToTop = bestDealsElement.offsetTop;
    window.addEventListener('scroll', function() {
        if(window.scrollY > bestDealsToTop - window.innerHeight) {
            var delayTime = 0;
            bestDealsTitleMain.classList.toggle('animate-fadeIn', bestDealsTitleMain);
            bestDealsItems.forEach(function(item) {
                item.classList.toggle('animate-fadeIn', item);
                item.style.animationDelay = delayTime + 's';
                delayTime = delayTime + 0.15;
            })
        }
    })    

clockElements.forEach(function(element, index) {
    secondNodes[index].innerText = secondTime[index];
    minutesNodes[index].innerText = minutesTime[index];
    hourNodes[index].innerText = hourTime[index];
    setInterval(function() {
        secondTime[index]--;
        if(secondTime[index] < 10 && secondTime[index] >= 0) {
            secondTime[index] = '0' + secondTime[index];
        } else if (secondTime[index] < 0) {
            secondTime[index] = 59;
            minutesTime[index]--;
            if(minutesTime[index] < 10 && minutesTime[index] >= 0) {
                minutesTime[index] = '0' + minutesTime[index];
            } else if (minutesTime[index] < 0) {
                minutesTime[index] = 59;
                hourTime[index]--;
                if(hourTime[index] < 10 && hourTime[index] >= 0) {
                    hourTime[index] = '0' + hourTime[index];
                }
                hourNodes[index].innerText = hourTime[index];
            }
            minutesNodes[index].innerText = minutesTime[index];
        }
        secondNodes[index].innerText = secondTime[index];
    }, 1000)
})