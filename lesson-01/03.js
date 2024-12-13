/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let number = 1;

while (number <= 20) {
    if (number % 2 !== 0) { // Проверяем, является ли число нечётным
        sum += number; // Добавляем нечётное число к сумме
    }
    number++; // Переходим к следующему числу
}

console.log("Сумма всех нечётных чисел от 1 до 20: " + sum);

// В этом коде:

// Инициализируем переменные:

// let sum = 0;: Создаем переменную sum с начальным значением 0.

// let number = 1;: Создаем переменную number с начальным значением 1.

// Цикл while:

// Цикл продолжается до тех пор, пока number меньше или равно 20.

// Проверка на нечётность:

// if (number % 2 !== 0): Проверяем, является ли number нечётным (остаток от деления на 2 не равен 0).

// Добавление нечётного числа:

// Если число нечётное, оно добавляется к sum.

// Увеличение счётчика:

// number++: Увеличиваем значение number на 1 на каждой итерации.

// Когда цикл завершится, в переменной sum будет храниться сумма всех нечётных чисел от 1 до 20..