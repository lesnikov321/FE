// 3. Дан массив

// let cars = [
//  {model: "Honda", speed: 200 },
//  {model: "Toyota", speed: 190 },
//  {model: "BMW", speed: 210 },
//  {model: "Ford", speed: 190 }
// ];
// Вывести значени модели и скорости по убыванию:
// от авто с самой большой скоростью до самой маленькой

// BMW - 210
// Honda - 200



let cars = [
    {model: "Honda", speed: 200 },
    {model: "Toyota", speed: 190 },
    {model: "BMW", speed: 210 },
    {model: "Ford", speed: 190 }
   ];
   
for (let i = 0; i < cars.length; i++){
    for (let j = 0; j < i; j++){
        if (cars[i].speed > cars[j].speed) {
            let x = cars[i];
            cars[i] = cars[j];
            cars[j] = x;
        }
    }
}

for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}
