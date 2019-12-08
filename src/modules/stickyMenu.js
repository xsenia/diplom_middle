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

export default stickyMenu;