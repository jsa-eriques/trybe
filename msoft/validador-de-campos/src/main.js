import validator from 'validator';
import './style.css';

const btnValidator = document.querySelector('#button');
const inputText = document.querySelector('#input');
const display = document.querySelector('h2');
const select = document.querySelector('#option');


btnValidator.addEventListener('click', (event) => {

    event.preventDefault();

    const campos = {
        cpf: validator.isTaxID(inputText.value, 'pt-BR'),
        hexColor: validator.isHexColor(inputText.value),
        email: validator.isEmail(inputText.value),
        uuid: validator.isUUID(inputText.value, 4),
        url: validator.isURL(inputText.value),
      };

      display.innerHTML = `A validação retornou ${campos[select.value]}`;

});