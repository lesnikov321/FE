// Напишите код, который выводит все простые числа из интервала от 2 до n. 
// Простым называется число F которое в промежутке от 2 до F делится без остатка только на себя самого


let input1 = prompt("Введите число:");

num:
for (let i = 2; i <= input1; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue num; 
    }
    console.log(i);
}