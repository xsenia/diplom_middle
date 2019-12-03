window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //dropdown
    const dropdown = () => {
        const clubSelectToggle = document.querySelector('.club-select p'),
            clubSelectList = document.querySelector('.club-select ul');

        clubSelectToggle.addEventListener('click', (event) => {
            let target = event.target;          
            if(target){                
                clubSelectList.style.display = (clubSelectList.style.display === '')  ? 'block' : '';
            }
        });
    };

    dropdown();


    //popup

    const popup = () => {
        const popupButtons = document.querySelectorAll('.open-popup'),
            popup = document.querySelectorAll('.popup');

            popup.forEach((elem) => {
                elem.style.display = 'none';
            });

            popupButtons.forEach((elem) => {
                elem.addEventListener('click', (event) => {
                    let target = event.target.closest('.open-popup');
                    target.classList.add('active');
                    let popupId = target.dataset.popup;
                    let popup = document.querySelector(popupId);
                    popup.style.display = (popup.style.display === 'none')  ? 'block' : 'none';                    
                });
            });

            popup.forEach((elem) => {
                elem.addEventListener('click', (event) => {
                    let target = event.target;
                    if(target.closest('.close-form, .overlay')){
                        const popupButtons = document.querySelectorAll('.open-popup');
                        popupButtons.forEach((elem) => {
                            elem.classList.remove('active');
                        });
                        
                        popup.forEach((elem)=>{
                            if(elem.style.display = 'block') {
                                elem.style.display = 'none'
                            }
                        });
                    }              
                });  
            });

    };

    popup();   



    //fadingSlider

    const fadingSlider = (sliderQuery, time, hasButtons) => {
        const slider = document.querySelector(`.${sliderQuery}-slider`),
            slide = document.querySelectorAll(`.${sliderQuery}-slider .slide`);
        
        const btnIco = `<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
        <g>
            <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
                "/>
        </g>
        </svg>`;        

        let currentSlide = 0,
            interval;

        if ( hasButtons ) {
            const addBtn = (name) => {
                const btn = document.createElement('div');
                btn.classList.add('slider-arrow', name);
                slider.append(btn);
                btn.innerHTML = `<span>${btnIco}</span>`;
            }
            addBtn('prev');
            addBtn('next');           
        }
        
        let dot = [];
        let dots = document.createElement('ul');

        dots.classList.add('dots');
        slider.append(dots);

        for(let i=0; i<slide.length; i++) {
            let dotOne = document.createElement('li');
            dotOne.classList.add('dot');
            dot[i] = dotOne;
            dots.append(dotOne);
        }
        dot[currentSlide].classList.add('dot-active');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };


        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'active');
            prevSlide(dot, currentSlide, 'dot-active');

            currentSlide++;
            if(currentSlide >= slide.length) {
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide, 'active');
            nextSlide(dot, currentSlide, 'dot-active');
            
        };

        const startSlide = (time = 1500) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target; 

            prevSlide(slide, currentSlide, 'active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.closest('.next')) {
                currentSlide++;
            } else if (target.closest('.prev')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if(currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if(currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => { 
            if(event.target.closest('.slider-arrow') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.closest('.slider-arrow') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(time);  

    };

    fadingSlider('main', 5000, false);
    fadingSlider('gallery', 1500, true);

    //sliderCarousel 

    class SliderCarousel {
        constructor({
            main,
            wrap,
            next,
            prev,
            infinity = false,
            position = 0,
            slidesToShow = 4,
            responsive = []
        }) {
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                infinity,
                widthSlide: Math.floor(100/this.slidesToShow)
            };
            this.responsive = responsive;
        }

        init(){
            this.addCssClass();
            this.addStyle();
            if(this.prev && this.next) {
                this.controlSlider();
            } else {
                this.addArrow();
                this.controlSlider();
            }
            if (this.responsive) {
                this.responseInit();
            }
            
        }

        addCssClass() {
            this.main.classList.add('xs-slider');
            this.wrap.classList.add('xs-slider__wrap');
            for (const item of this.slides) {
                item.classList.add('xs-slider__item');
            }
        }

        addStyle() {
            let style = document.getElementById('sliderCarousel-style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'sliderCarousel-style';
            }
            style.textContent = `
                .xs-slider {
                    overflow: hidden;
                }
                .xs-slider__wrap {
                    display: flex;
                    transition: transform .5s;
                    will-change: transform;
                }
                .xs-slider__item {
                    flex: 0 0 ${this.options.widthSlide}%;
                    margin: auto 0;
                }            
            `;
            document.head.appendChild(style);
        }   

        controlSlider() {
            this.prev.addEventListener('click', this.prevSlide.bind(this));
            this.next.addEventListener('click', this.nextSlide.bind(this));
        }

        prevSlide() {
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;
                if (this.options.position < 0) {
                    this.options.position = this.slides.length - this.slidesToShow;
                }
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
            
        }

        nextSlide() {
            if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
                ++this.options.position;
                if(this.options.position > this.slides.length - this.slidesToShow) {
                    this.options.position = 0;
                } 
                this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }

        addArrow() {
            this.prev = document.createElement('div');
            this.next = document.createElement('div');

            this.prev.innerHTML = '<span><</span>';
            this.next.innerHTML = '<span>></span>';
            
            this.prev.classList.add('slider-arrow', 'xs-slider__prev');
            this.next.classList.add('slider-arrow', 'xs-slider__next');

            this.main.appendChild(this.prev);
            this.main.appendChild(this.next);

        }

        responseInit() {
            const slidesToShowDefault = this.slidesToShow;
            const allResponse = this.responsive.map(item => item.breakpoint);
            const maxResponse = Math.max(...allResponse);
            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;
                if (widthWindow < maxResponse) {
                    for (let i = 0; i < allResponse.length; i++) {
                        if ( widthWindow < allResponse[i] ) {
                            this.slidesToShow = this.responsive[i].slidesToShow;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.addStyle();
                        }                        
                    }
                }  else {
                    this.slidesToShow = slidesToShowDefault;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.addStyle();
                }
            };
            checkResponse();

            window.addEventListener('resize', checkResponse);
        }

    }


    const carousel = new SliderCarousel({
        main: '#services .wrapper',
        wrap: '.services-slider',
        // prev: '.xs-slider__prev',
        // next: '.xs-slider__next',
        slidesToShow: 4,
        infinity: false,
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


    //stickyMenu

    const stickyMenu = () => {
        const windowWidth = document.documentElement.clientWidth;
        const topMenu = document.querySelector('.top-menu');
        const topMenuPositionTop = topMenu.getBoundingClientRect().top + window.pageYOffset;
        const unFixedMenu = () => {
            if (topMenu.classList.contains('sticky')) {
                topMenu.classList.remove('sticky');
            }
        } 
        const fixedMenu = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop >= topMenuPositionTop) {
                topMenu.classList.add('sticky');
            } else {
                topMenu.classList.remove('sticky');
            }
        };

        if (windowWidth < 768) {            
            window.addEventListener('scroll', function() {
                fixedMenu();
            });
        }        

        window.addEventListener('resize', function() {
            let windowWidth = document.documentElement.clientWidth;
            if (windowWidth >= 768) {
                unFixedMenu();
                window.addEventListener('scroll', function() {
                    unFixedMenu();
                });
            } else if (windowWidth < 768) {
                fixedMenu();
                window.addEventListener('scroll', function() {
                    fixedMenu();
                });
            }
        });
    };

    stickyMenu();
   
});




