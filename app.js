
let age = (prompt('Ingrese su edad (años)'));

const msgOne= 'toddler';
const msgTwo= 'preschooler';
const msgThree = 'gradeschooler';
const msgFour = 'teenager';
const msgFive = 'young adult';
const msgSix = 'adult';

if (age % 1 !== 0 || age === '0' || age === NaN || age === '') {
    alert('Error: el valor ingresado no es válido'); 

}   if (age >= 1 && age <= 3) {
      alert('You are a ' + msgOne);
    } else if (age >3 && age <=5) {
        alert('You are a ' + msgTwo);
    } else if (age >5 && age <=12) {
        alert('You are a ' + msgThree);
    } else if (age >12 && age <=18) {
        alert('You are a ' + msgFour);
    } else if (age >18 && age <=21) {
        alert('You are a ' + msgFive);
    } else if (age >21) {
        alert('You are an ' + msgSix);
    }