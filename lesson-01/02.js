/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial = 1;
let n = 1;

while (n <= 10) {
    factorial *= n; 
    n++; 
}

console.log ("вывести на экран: " + factorial);




// let factorial = 1;
// let n = 10;


// for (let i = 1; i <= n; i++) {
//    factorial *= i;
// }

// console.log(factorial);