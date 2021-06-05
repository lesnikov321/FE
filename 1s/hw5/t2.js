// // . Дан массив
// // let complexArr = [1, [2,3], 4, [5,6], 7, [8,9]];
// // вывести все цифры всех массивов

let complexArr = [1, [2,3], 4, [5,6], 7, [8,9]];
let newArr = [];


for (let subArr of complexArr) {
	for (let elem in subArr) {
	}newArr.push(subArr);
}
document.write(newArr)