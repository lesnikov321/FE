// Вывести таблицу умножения на 5


let i = 5;
let t = 1;
console.log("Таблица умножения на 5");

for (let j = 1; j <= 5; j++) {
    t = i * j;
    console.log(`${j} * ${i} = ${t}`);
}
