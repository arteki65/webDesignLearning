/*function startApp() {
    'use strict';



    var carousel = new Siema({
        selector: '.carousel',
        draggable: false,
        onInit: function() {
            var headers = document.querySelectorAll('.header');
            for (var i = 0; i < headers.length; i++) {
                headers[i].style.height = '100vh';
                headers[i].style.position = 'relative';   
            }
            document.querySelector('body').style.visibility = 'visible';
        },
        onChange: function () {
            carouselButtonsApp.currentCarouselIndex = this.currentSlide + 1;
        }
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
}

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    startApp();
});*/
import './../css/style.css';
import './../css/header.css';
import './../css/components.css';

import './../img/tmt_logo_small.png';

console.log('working');