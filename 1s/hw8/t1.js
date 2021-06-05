// добавить в обьект person поле showAge которое является функцией и выводит 
// в консоль возраст данного обьекта  используя this.

person.showAge = function showAge() {
console.log(this.born);
}