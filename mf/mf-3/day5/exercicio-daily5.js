// function userInfo() {
//   const userEmail = 'maria@email.com';

//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   console.log(userEmail);
// }
// userInfo();


// if (true) {
//   // inicio do escopo do if
//   var userAge = '20';age = 10;

// var age;

// console.log(age);
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge); // 20

// var let const

// var userName = 'Isabella';
// var userName = 'Lucas';
// console.log(userName); // Resultado: Lucas


// let favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology); // Facial recognition


// const userInfo = {
//   name: 'Cláudio',
//   id: '5489-2',
//   email: 'claudio@email.com',
// };

// userInfo.name = 'João';

// console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }


// const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro

// function minhaIdade () {
//   var idade = 78;
//   console.log(idade);
// }

// minhaIdade();

// age = 10;

// var age;

// console.log(age);



// template literals


// const myName = 'Isabella';
// console.log('Hello' + ' ' + myName + '!');

// const myName = 'Isabella';
// console.log(`Welcome ${myName}!`);
// console.log('Hello' + ' ' + myName + '!');

// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');


// function printName() {
//   const myName = 'Lucas';
//   return myName;
// };

// console.log(printName());

// const printName = function () {
//   const myName = 'Lucas';
//   return myName;
// };

// console.log(printName());

// const printName = () => {
//   const myName = 'Lucas';
//   return myName;
// };

// console.log(printName());

// const printName = () => 'Lucas';
// console.log(printName());

// const multiplyByTwo = number => number * 2;
// console.log(multiplyByTwo(10));

// const multiplication = (number, multi) => number * multi;
// console.log(multiplication(8, 2));

// function soma (num1, num2) {
//   return num1 + num2;
// }

// console.log(soma(2,2));


// const soma = function (num1, num2) {
//   return num1 + num2;
// }

// console.log(soma(2,2));

// => ARROW FUNCTION
// const soma = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(soma(2,2));


// => ARROW FUNCTION
// const soma = (num1, num2) => num1 + num2;

// console.log(soma(2,2));


//  function contaPalavras (frase) {
//   return frase.split(' ').length;

//  }

//  console.log(contaPalavras('Fala trio, como vocês estão?'));

 // Se ele ta contando os splits, não deveria ser 4?



//  const contaPalavras = frase => frase.split(' ').length;

//  console.log(contaPalavras('Fala tribo, beleza?'));

// function objetoPessoa (nome, idade) {
//   return {
//     nome: nome,
//     idade: idade
//   }
// }


// console.log(objetoPessoa('Joaquim', 25));


// const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
// console.log(objetoPessoa('Joaquim', 25));


// A sintaxe básica do operador ternário é muito simples:
// `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// // Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
// const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
// console.log(trueExpression); // isso é verdade

// const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
// console.log(falseExpression); // isso é mentira

// sintaxe do operador ternario x ? y : z;
// O x é uma condição que será avaliada como verdadeira ou falsa;
// O y é o retorno se a condição for verdadeira;
// O z é o retorno se a condição for falsa.

// Situação em que é mais simples usar o operador ternário:
// const checkIfElse = (age) => {
//   if (age >= 18) {
//     return `Você tem idade para dirigir!`;
//   } else {
//     return `Você ainda não tem idade para dirigir...`;
//   }
// };

// const checkTernary = (age) => (
//   age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
// );

// ------------------------

// Situação em que usar o operador ternário não faz muito sentido:
// const checkIfElse = (fruit) => {
//   if (fruit === `maçã`) {
//     return `Essa fruta é vermelha`;
//   } else if (fruit === `banana`) {
//     return `Esta fruta é amarela`;
//   } else {
//     return `Não sei a cor`;
//   }
// };

// const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
//   : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!



