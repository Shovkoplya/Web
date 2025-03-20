var j = -100;
while(j <= 100) {
console.log(j);
 j++;
}
// Завдання 2: Виведення парних чисел від 0 до 100 за допомогою do...while
let evenNum = 0;
do {
    console.log(evenNum);
    evenNum += 2;
} while (evenNum <= 100);

// Завдання 3: Ділення числа 1000 на 3 поки результат не стане менше 5
let b = 1000;
let count = 0;
while (b / 3 >= 5) {
    b /= 3;
    count++;
}
let res = b;
document.write(`res: ${res}, count: ${count}<br>`);

// Завдання 4: Конвертація довжини із сантиметрів у дюйми
function convertToInches(cm) {
    alert(`${cm} см = ${cm / 2.54} дюймів`);
}
convertToInches(100); // Приклад, можна замінити на введене значення

// Завдання 5: Визначення дня тижня за введеним числом
let dayNumber = prompt("Введіть число від 1 до 31:");
if (dayNumber >= 1 && dayNumber <= 31) {
    let dayOfWeek = new Date(2024, 2, dayNumber).toLocaleDateString('uk-UA', { weekday: 'long' });
    alert(`День тижня: ${dayOfWeek}`);
} else {
    alert("Некоректне число!");
}