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

export default SliderCarousel;
