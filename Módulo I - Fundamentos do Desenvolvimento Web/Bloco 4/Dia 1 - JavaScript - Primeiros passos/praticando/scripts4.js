let weekDay = 35;
let day;

switch (weekDay) {
    case 0:
        {
            day = "Domingo";
        }
    case 1:
        {
            day = "Segunda-feira";
        }
    case "a":
        {
            day = "Terça-feira";
        }
    default:
        {
            day = "Dia inválido";
        }
    }

console.log(day);