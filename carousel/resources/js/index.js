function startApp() {
    'use strict';
    var carousel = new Siema({
        selector: '.carousel',
        duration: 300,
        onChange: function () {
            carouselButtonsApp.currentCarouselIndex = this.currentSlide + 1;
        },
        loop: true
    });

    var carouselButtonsApp = new Vue({
        el: '#carousel-buttons',
        data: {
            currentCarouselIndex: carousel.currentSlide + 1
        },
        methods: {
            carouselBtnClicked: function (index) {
                this.currentCarouselIndex = index;
                carousel.goTo(index - 1);
            }
        }
    });
    
    /*var changeSlide = function () {
        carousel.next();
        setTimeout(changeSlide, 5000);
    };
    
    setTimeout(changeSlide, 5000);*/
}

startApp();