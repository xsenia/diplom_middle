'use strict';

import dropdown from './modules/dropdown';
import popup from './modules/popup';
import fadingSlider from './modules/fadingSlider';
import stickyMenu from './modules/stickyMenu';
import toTop from './modules/toTop';
import calcPrice from './modules/calcPrice';
import sendForm from './modules/sendForm';
import textValidator from './modules/textValidator';
import maskPhone from './modules/maskPhone';
import SliderCarousel from './modules/SliderCarousel'

dropdown();

popup();

fadingSlider('main', 5000, false);
fadingSlider('gallery', 1500, true);   

stickyMenu();

toTop();

calcPrice();    

sendForm('banner-form','check1');
sendForm('footer_form',false);
sendForm('card_order','card_check');
sendForm('form1','check');
sendForm('form2','check2');

textValidator();

maskPhone('input[type="tel"]'); 

const carousel = new SliderCarousel({
    main: '#services .wrapper',
    wrap: '.services-slider',
    // prev: '.xs-slider__prev',
    // next: '.xs-slider__next',
    slidesToShow: 4,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3
    },
    {
        breakpoint: 768,
        slidesToShow: 2
    },
    {
        breakpoint: 576,
        slidesToShow: 1
    }]
});
carousel.init();



