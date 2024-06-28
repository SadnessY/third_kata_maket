let body = document.querySelector('body');
let moreBtn = document.querySelector('.container__more-text');
let swiperLayout768 = document.querySelector('.swiper');
let swiper = null;

moreBtn.addEventListener('click', function() {
    swiperLayout768.classList.toggle('swiper--show-all');
    if (!moreBtn.classList.contains('container__more-text--less')) {
        moreBtn.innerHTML = 'Скрыть';
        moreBtn.classList.add('container__more-text--less');
    } else {
        moreBtn.innerHTML = 'Показать все';
        moreBtn.classList.remove('container__more-text--less');
    }
});

let useSwiper = function() {
    if (window.innerWidth < 768) {
        if (!swiper) {
            swiper = new Swiper('.swiper', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                slidesPerView: document.documentElement.scrollWidth / 256,
                spaceBetween: 0,
                slidesOffsetAfter: 40,
            });
        } else {
            swiper.params.slidesPerView = document.documentElement.scrollWidth / 256;
            swiper.update();
        }
    } else if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
    }
};

window.onload = function() {
    useSwiper();
};

window.addEventListener('resize', function() {
    useSwiper();
});

window.addEventListener('keydown', function(event) {
    if (swiper && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
        if (event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if (event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    }
});
