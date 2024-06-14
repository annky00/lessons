// Задача 2

for (let i = 1; i <= 10; i++) {
    console.log(`Пункт №${i}`)
}

// Задача 4

function division(a = 1, b = 1) {
    if ( typeof a !== 'number' || typeof b !== 'number') {
        return "Аргументи мають бути числами"
    } else if ( b === 0) {
        return "Ділення на нуль неможливе"
    } else {
        let result = a / b
        return `Результат ділення: ${result}`
    }
}

console.log(division(12, 0))
console.log(division(54, 2))
console.log(division(54, "45"))


// Задача 5

// Створіть масив даних - 5 елементів, один з яких число 10. Обробіть масив за допомогою методу перебору. Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль.

let catData = ["Ksusha", "eat", "jump", 10, true]

catData.forEach(catAge => {
	if (catAge === 10) {
        console.log(catAge);
    }
});
