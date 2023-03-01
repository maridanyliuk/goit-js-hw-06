const elem = document.querySelector('#validation-input');
const dataLength = elem.getAttribute('data-length')
elem.addEventListener('blur', event =>
{
    if (event.target.value.length === Number(dataLength)) {
        elem.classList.add('valid')
        if (elem.classList.contains('invalid')) {
            elem.classList.remove('invalid')
        }
    } else {
        if (elem.classList.contains('valid')) {
            elem.classList.remove('valid')
        }
    
        elem.classList.add('invalid')
    }
})