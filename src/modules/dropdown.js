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

export default dropdown;