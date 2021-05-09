const Form = document.getElementsByClassName("form")[0];
const Inputs = document.getElementsByClassName("form__inputs")[0];
const EmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function validateForm() {
    const FD = new FormData(Form);
    let name = FD.get('name');
    let email = FD.get('email');

    let nameErrorsPrint = document.getElementsByClassName("form__input-error")[0];
    let emailErrorsPrint = document.getElementsByClassName("form__input-error")[1];

    nameErrorsPrint.innerHTML = '';
    emailErrorsPrint.innerHTML = '';

    let error = false;

    if (!name) { nameErrorsPrint.innerHTML = "Please fill name"; error = true };

    if (!email) { emailErrorsPrint.innerHTML = "Please fill email"; error = true }
    else if (!email.match(EmailFormat)) { emailErrorsPrint.innerHTML = "Please enter valid email"; error = true }

    if (!error) {
        Inputs.innerHTML = '';
        [name, email].forEach(element => {
            let confirmation = document.createElement('p');
            (element == name) ?
                confirmation.innerHTML = `Thank you for contacting us, ${element}!` :
                confirmation.innerHTML = `We will contact you soon by ${element}!`;
            confirmation.classList.add('form__text')
            Inputs.appendChild(confirmation);
        });
    }
}