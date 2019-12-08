const calcPrice = () => {
    const total = document.getElementById('price-total');

    if (total) {

        const form = document.getElementById('card_order');
        
        const price = {
            mozaika: [1999, 9900, 13900, 19900],
            schelkovo: [2999, 14990, 21990, 24990]
        };
        const promoInput = document.getElementById('promocode');
        let month = 0;
        let club = price.mozaika;
        let result = price.mozaika[0];

        total.innerHTML = result; 

        form.addEventListener(('click'), (event) => {
            let target = event.target;

            //получаем месяцы            
            if(target.closest('.time')) {
                if(target.tagName === 'LABEL') {
                    month = +target.getAttribute('for').slice(1, target.length) - 1;
                }
            } 

            //получаем прайс клуба            
            if(target.closest('.club')) {
                if(target.tagName === 'INPUT') {
                    club = price[target.getAttribute('value')];                     
                }
            }

            result = club[month];

            if(promoInput.value === 'ТЕЛО2019') {
                result = Math.ceil(result * 0.7);
                total.innerHTML = result;

            }

            total.innerHTML = result;
        
        });

        //promocode
        const promocode = () => {        

            promoInput.addEventListener('input', ()=> {
                if(promoInput.value === 'ТЕЛО2019') {
                    result = Math.ceil(result * 0.7);
                    total.innerHTML = result;

                }
            });

        };

        promocode();
    
    }
    
};

export default calcPrice;