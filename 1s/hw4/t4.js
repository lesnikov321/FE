// Вывести всю таблицу умножения.


console.log("Таблица умножения на 9");

let a = 0;
let b = 1;
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        b = i * j;
        console.log(`${i} * ${j} = ${b}`);
    }
    a++;
    console.log("");
}