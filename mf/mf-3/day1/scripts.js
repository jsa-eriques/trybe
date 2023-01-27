const currentHour = 24;
let message;

if (currentHour >= 22) {
    message = "Não deveriamos comer nada, é hora de dormir!"
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18 ) {
    message = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >= 11 && currentHour < 14 ) {
    message = "Hora do almoço!!!"
}
else if (currentHour >= 4 && currentHour <= 11 ) {
    message = "Hmmm, cheiro de café recém-passado"
}
else {
    message = "Você deveria estar dormindo"
}


let weekDay = "sabado"

if (weekDay === "segunda-feira" || weekDay === "terca-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Mais um dia de aprendizado na trybe!")
}
else {
    console.log("Playstation day")
}