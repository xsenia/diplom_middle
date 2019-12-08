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

                
                if (target.closest('.fixed-gift')) {
                    target.style.display = 'none';
                }                  
            });
        });

        popup.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                let target = event.target;
                if(target.closest('.close-form, .overlay, nav.popup-menu ul li a,.close-btn')){
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

export default popup;