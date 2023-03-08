const multiply = (number, value) => {
  // Escreva aqui a sua função
  const multDisplay = typeof value !==  'number' ? 1 : value;
  return number * multDisplay;
};

console.log(multiply(8,10));