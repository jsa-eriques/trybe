// section one

// let num1 = 100;
// let num2 = 50;

// let adicao = (num1 + num2);
// console.log(adicao);
// let subtracao = (num1 - num2);
// console.log(subtracao);
// let multiplicacao = (num1 * num2);
// console.log(multiplicacao);
// let divisao = (num1 / num2);
// console.log(divisao);
// let modulo = num1 % num2;
// console.log(modulo);
// let teste = (num1 * num2) ;
// console.log(teste);
// console.log("PQP");

// section two


// let num1 = 100;
// let num2 = 50;
// if (num1 > num2) {
//     console.log("O primeiro numero é maior que o segundo!");
// } else {
//     console.log("O segundo numero é maior que o primeiro!")
// }


// section three


// let num1 = 25;
// let num2 = 5;
// let num3 = 2;

// if (num1 > num2 && num1 > num3){
//     console.log(num1);
//     console.log("Este é o maior numero de todos")
// }else if (num2 > num1 && num2 > num3) {
//     console.log(num2);
//     console.log("Este é o maior numero de todos")
// }else if (num3 > num1 && num3 > num2) {
//     console.log(num3);
//     console.log("Este é o maior numero de todos")
// }


// section four

// let num1 = 0;

// if (num1 > 0){
//     console.log("Positive");
// }else if (num1 < 0) {
//     console.log("Negative");
// }else {
//     console.log("Zero");
// }


// section five

// let l1 = 60;
// let l2 = 60;
// let l3 = 50;

// if (l1 + l2 + l3 === 180) {
//     console.log(true);
//     console.log("Voce tem um triangulo perfeito");
// } else if ( l1 + l2 + l3 != 180 ) {
//     console.log(false);
//     console.log("Erro no calculo do triangulo");
// }


// section six

// let piecechess = 'biSpo'

// switch (piecechess.toLowerCase()) {
//     case 'rei':
//         console.log('Rei -> Movimenta apenas 1 casa para qualquer lado');
//         break;
//     case 'rainha':
//         console.log('Rainha-> Diagonal, horizontal e vertical.');
//         break;    
//     case 'bispo':
//         console.log('Bispo-> Diagonal.');
//         break;
//     case 'cavalo':
//         console.log('Cavalo -> "L" pode pular sobre as peças.');
//         break;    
//     case 'torre':
//         console.log('Torre -> Movimenta na Horizontal e Vertical');
//         break;    
//     case 'peão':
//         console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
//         break;     
//     default:
//         console.log('Erro, peça inválida!');
// };
    

// section seven


// let nota = 101;


// if ( nota > 0 && nota < 50 ) {
//     console.log("F");
// }else if (nota >= 50 && nota < 60) {
//     console.log("E");
// }else if (nota >= 60 && nota < 70) {
//     console.log("D");
// }else if (nota >= 70 && nota < 80) {
//     console.log("C");
// }else if (nota >= 80 && nota < 90) {
//     console.log("B");
// }else if (nota >= 90 && nota < 100) {
//     console.log("A");
// }else if ( nota < 0 || nota > 100) {
//     console.log("Erro no calculo da sua nota!")
// }


// section eight

// const a = 5;
// const b = 3;
// const c = 16;

// let isEven = false;

//Even
// if (( a % 2 === 0 || b % 2 === 0 || c % 2 === 0)){
//     isEven = true;
// }

// console.log(isEven);

// let isOdd = false;

//Odd
// if (( a % 2 !=== 0 || b % 2 !=== 0 || c % 2 !=== 0)){
//     isOdd = true;
// }

// console.log(isOdd);


//section nine

// const valorCusto = 199 * 1000;
// const valorVenda = 590 * 1000;
// let impostoSobreOCusto = 1.2;
// let valorCustoTotal = valorCusto * impostoSobreOCusto;
// let lucro = valorVenda - valorCustoTotal;

// if  ( valorCusto < 0 || valorVenda < 0) {
//     console.log("O valor de custo ou de venda não pode ser menor que zero")
// } 

// console.log(valorCustoTotal);
// console.log(lucro);


//section teen

// const salarioBruto = 5000.00;
// let aliquotaINSS;
// let aliquotaIR;

// if (salarioBruto > 0 && salarioBruto <= 1556.94) {
//    (aliquotaINSS = salarioBruto * 0.08);
// }else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
//     aliquotaINSS = salarioBruto * 0.09;
// }else if ( salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
//     aliquotaINSS = salarioBruto * 0.11;
// }else if ( salarioBruto >= 5189.82) {
//     aliquotaINSS = 570.88;
// }

// const salarioBaseIR = salarioBruto - aliquotaINSS;
// console.log(salarioBaseIR)

// if (salarioBaseIR > 0.00 && salarioBaseIR <= 1903.98 ) {
//     aliquotaIR = 0.00;
// }else if (salarioBaseIR > 1903.99 && salarioBaseIR <= 2826.65 ) {
//     aliquotaIR = (salarioBaseIR * 0.075) - 142.80;
// }else if (salarioBaseIR > 2826.66 && salarioBaseIR <= 3751.05 ) {
//     aliquotaIR = (salarioBaseIR * 0.15) - 354.80;
// }else if (salarioBaseIR > 3751.06 && salarioBaseIR <= 4664.68 ) {
//     aliquotaIR = (salarioBaseIR * 0.225) - 636.13;
// }else if (salarioBaseIR > 4664.68) {
//     aliquotaIR = (salarioBaseIR * 0.275) - 636.13;
// }

// const salarioLiquido = salarioBaseIR - aliquotaIR;
// console.log(salarioLiquido)


//let valorINSS = salarioBruto * aliquotaINSS;
//let valorIR = salarioBruto * aliquotaIR;
//let salarioLiquido = salarioBruto - valorINSS - valorIR;
// console.log(valorINSS)
// console.log(valorIR)
// console.log(salarioLiquido)

// section twenty one

