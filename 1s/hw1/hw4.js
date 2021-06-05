// 4. (*) Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел используя template string

let usersDigit = prompt("Введите пятизначное число:");

let fifthDigit = usersDigit % 10
let  tempValue = (usersDigit - fifthDigit) / 10

let  fourthDigit = tempValue % 10
tempValue = (tempValue - fourthDigit) / 10

let  thirdDigit = tempValue % 10
tempValue = (tempValue - thirdDigit) / 10

let  secondDigit = tempValue % 10
tempValue = (tempValue - secondDigit) / 10

let  firstDigit = tempValue % 10
tempValue = (tempValue - firstDigit) / 10

let result4 = `Вы ввели число ${usersDigit} следующей последовательности цифр: ${firstDigit}, ${secondDigit}, ${thirdDigit}, ${fourthDigit}, ${fifthDigit}.`;


alert(result4);