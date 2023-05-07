import './style.css';
import Swal from 'sweetalert2';

console.log('Hello World');

const title = document.querySelector('#title');
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');
const ACCESS_TOKEN = '5960683474018785';
const BASE_URL = (`https://superheroapi.com/api.php/${ACCESS_TOKEN}`);
const HEROES_LIMIT = 1000;
const randomId = () => Math.floor(Math.random() * HEROES_LIMIT);

button.addEventListener('click', (event) => {
    event.preventDefault();
  
    const id = randomId();
    //requisição
    fetch(`${BASE_URL}/${id}`)
    //então ... convertendo o resultado em json
        .then((result) => result.json())
        //F
        .then((data) => {
            img.src = data.image.url;
            name.innerHTML = data.name;
        })
        //se algum dos then/então falhar o catch retorna o erro
        .catch((error) => Swal.fire({
            title: 'Hero not found',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Cool',
        }));
});

/* refazer testes */ 
/*  */