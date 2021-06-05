// Дана функция
// function showFullName() {
//     console.log(`${this.firstName} - ${this.lastName}`)
// }
//  используя данную функцию вывести в консоль полные имена по всем обьектам. Если есть нео бходимость 
//  функцию  showFullName можно модифицировать

person.showFullName = function showFullName() {
    console.log(`${this.firstName} - ${this.lastName}`);
}

person.showFullName();
person.showFullName.call(person2);
person.showFullName.call(person3);
person.showFullName.call(person4);
person.showFullName.call(person5);