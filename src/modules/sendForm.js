//Send ajax form
const sendForm = (formId,agreement) => {
    //форма
    const form = document.getElementById(formId);

    //сообщение об ошибке
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 20px;padding-top:10px;color:#ff7100;max-width:400px;margin: 0 auto;';
    form.appendChild(statusMessage);

    const loadMessage = document.createElement('div');
    const loadText = `<div class="container-load">
                        <div class="item-1"></div>
                        <div class="item-2"></div>
                        <div class="item-3"></div>
                        <div class="item-4"></div>
                        <div class="item-5"></div>
                    </div>`;
    loadMessage.style.cssText = 'font-size: 20px;padding-top:10px;color:#ff7100;max-width:400px;margin: 0 auto;';
    form.appendChild(loadMessage);

    //спасибка 
    const thanks = document.getElementById('thanks');
    const thanksContent = document.querySelector('#thanks .form-content');
    const warningMessage = 'Необходимо подтвердить согласие на обработку персональных данных';
    const clubMessage = 'Пожалуйста, выберите клуб';

    //блок с чекбоксом на согласие
    let checkBox;

    if (agreement !== false) {
        checkBox = document.getElementById(agreement);           
        
        checkBox.addEventListener('change', () => {
            if(checkBox && checkBox.checked === false) {
                statusMessage.textContent = warningMessage;
            } else {
                statusMessage.textContent = '';
            }  
        });
        
    } 

    //проверка на выбранный клуб
    const footerForm = document.getElementById('footer_form');
    const clubFooter = document.querySelectorAll('#footer_form .club > input[type="radio"]');

    let clubChecked = false;
    
    clubFooter.forEach((elem) => {
        if(elem.checked) {
            clubChecked = true;
        }
    });

    if(!clubChecked) {
        footerForm.addEventListener('click',(event)=>{
            let target = event.target;
                       
            if(target.closest('.club')) {
                statusMessage.textContent = '';
                clubChecked = true;
            }

            clubFooter.forEach((elem) => {
                if(elem.checked) {
                    clubChecked = true;
                }
            });
            
        });
    }
    
    
    form.addEventListener('submit', (event) => {            
        event.preventDefault();
        let target = event.target; 
        
        //предупреждение об ошибке
        form.appendChild(statusMessage);

        // загрузка
        form.appendChild(loadMessage);
        loadMessage.innerHTML = loadText;

        //собираем данные с формы
        const formData = new FormData(form);
        let body = {};             
        formData.forEach((val,key) => {
            body[key] = val; 
        }); 
        
        //блок с чекбоксом
        if (agreement !== false) { 
                               
            if(checkBox && checkBox.checked === false) {
                statusMessage.textContent = warningMessage;
                loadMessage.innerHTML = '';
                return;
            } else {
                statusMessage.textContent = '';
                loadMessage.innerHTML = loadText;
            }
        }
        
        //проверка на выбранный клуб
        if(target.closest('#footer_form')) {
            if(!clubChecked) {
                statusMessage.textContent = clubMessage;
                return;
            } else {
                statusMessage.textContent = '';
            }
        }

        
        if(body.phone && body.phone.length < 4) {
            statusMessage.textContent = 'номер телефона не может быть меньше 4';
            loadMessage.innerHTML = '';
            return;
        }

        //отправка данных
        postData(body);

        //очистка формы
        resetForm(formId);

    });
    
    
    //отправка данных
    const postData = (body) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {  
            if(request.readyState !== 4) {
                return;                
            }    
            if(request.status === 200) {
                thanks.style.display = 'block';
                loadMessage.innerHTML = '';
            } else {
                //предупреждение об ошибке
                thanks.style.display = 'block';
                thanksContent.innerHTML = `<div class="form-content">
                    <h4>Извините!</h4>
                    <p>Что-то пошло не так.<br> Ваша заявка не отправлена.</p>
                    <button class="btn close-btn">Закрыть</button>
                </div>`;                    
            }
        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');            

        request.send(JSON.stringify(body));
    };

    const resetForm = (formId) => {
        let form = document.getElementById(formId);            
        let dataInputs = form.querySelectorAll('input');
        dataInputs.forEach((input) => {
            if(input.name !== 'form_name' || input.name !== 'card-type') {
                input.value = ''; 
            }                                  
        });
    };
};

export default sendForm;