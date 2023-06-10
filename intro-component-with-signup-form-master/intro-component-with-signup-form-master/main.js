const form = document.querySelector('.right-col form');
const inputs = document.querySelectorAll('.right-col .form-container form input');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    inputs.forEach((input)=>{
        console.log(input.value)
        if (input.value) {
            input.parentElement.classList.add('error')
        }
    })
})