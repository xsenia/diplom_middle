//Валидатор ввода кириллицы

const textValidator = () => {
    const input = document.querySelectorAll('.textValid');

    input.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[a-z\d]/g, '');
        });
    });        
};

export default textValidator;