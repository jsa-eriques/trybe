// const multiply = (number, value) => {
//   // Escreva aqui a sua função
//   const multDisplay = typeof value !==  'number' ? 1 : value;
//   return number * multDisplay;
// };

// console.log(multiply(8,10));



// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach((element, index) => {
//   console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
// });


const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
})





// const newEmployees = () => {
//   const employees = {
//     id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const newEmail = (fullName) => {
//   const email = fullName.toLowerCase().replace(' ', '_').concat('@trybe.com');
//   return {
//     name: fullName,
//     email: email
//   };
// }

// // Adicione seu código aqui



// const employeeGenerator = (fullName) => { 
//   const email = fullName.toLowerCase().replace(' ', '_').concat('@trybe.com');
//   return { name: fullName, email: email };
// };

// const newEmployees = (callback) => {
// const employees = {
//   id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//   id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//   id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
// }
// return employees;
// };



// console.log(newEmployees(employeeGenerator))



// var list1 = [
// { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
// { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
// { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];


// function isSameLanguage(list) {
// return list.every((element) => element.language)
// }

// console.log(list1.language)


// function isSameLanguage(list) {
// // thank you for checking out the Coding Meetup kata :)
// return list.every(element => element.language === 'JavaScript') ;
// }


const newHof = () => Math.floor(Math.random() * 5 ) +1;
console.log(newHof())

const checkNumber = (number, callback) => number === callback ? "Parabéns, você ganhou" : "Tente novamente";

console.log(checkNumber(1,newHof()))

/* aleatorizador não bate certo com o numero */



const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const newHo2 = (check) => {

}


const newHof2 = (arrayCorrect, arrayCheck, callback) => {
  arrayCheck.forEach((word) => {
    newHo2(word)
  });
}


const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

const newhhh = (check) => {
  emailListInData.forEach((email) => )
}