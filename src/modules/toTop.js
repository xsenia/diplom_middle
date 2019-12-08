const toTop = () => {
    const toTopArrow = document.getElementById('totop');
    toTopArrow.style.display = 'none';

    const firstBlock = document.querySelector('.header-main');
    const firstBlockHeigth = firstBlock.getBoundingClientRect().height;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop >= firstBlockHeigth) {
            toTopArrow.style.display = 'block';
        } else {
            toTopArrow.style.display = 'none';
        }
    });
    
};

export default toTop;