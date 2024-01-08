// import validator from 'validator';
// import './style.css';

// const btnValidator = document.querySelector('#button');
// const inputText = document.querySelector('#input');
// const display = document.querySelector('h2');
// const select = document.querySelector('#option');


// btnValidator.addEventListener('click', (event) => {

//     event.preventDefault();

//     const campos = {
//         cpf: validator.isTaxID(inputText.value, 'pt-BR'),
//         hexColor: validator.isHexColor(inputText.value),
//         email: validator.isEmail(inputText.value),
//         uuid: validator.isUUID(inputText.value, 4),
//         url: validator.isURL(inputText.value),
//       };

//       display.innerHTML = `A validação retornou ${campos[select.value]}`;

// });

// promise resolvida retornando o número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

// promise rejeitada retornando um objeto de erro


const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });

  const randomPromise = () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if(randomNumber % 2 === 0) {
          resolve(randomNumber);
        } else {
          reject(new Error(`O número ${randomNumber} não é valido`));
        }
      }, 1000)
    })
  }

randomPromise()
  .then((response) => {
    console.log(`Promise resolvida. O número gerado é ${response}`)
  })
  .catch((error) => {
      console.log(`Promise rejeirada: ${error.message}`)
  });
  // resolvedPromise()
  // .then((response) => {
  //   console.log(`resolvedPromise: o número gerado é ${response}.`);
  // })
  // .catch((error) => {
  //   console.log(`Com a promise resolvida, não irá passar pelo catch`);
  // });

  // rejectedPromise()
  // .then((response) => {
  //   console.log(`Com a promise rejeitada, não irá passar pelo then`);
  // })
  // .catch((error) => {
  //   console.log(`rejectedPromise: ${error.message}`);
  // });


  /* se o codigo é assincrono necessita promisse */