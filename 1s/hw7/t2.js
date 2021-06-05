// Написать функцию которая бы выводила все элементы массива, любой вложенности. В задании нужно использовать рекурсию.

// let arr = [1 ,2, [3 ,4], 5, [6, 7, [8, 9, 10] ] ];

// showItems(arr) // 1,2,3,4,5,6,7,8,9,10


let arr = [1 ,2, [3 ,4], 5, [6, 7, [8, 9, 10] ] ];
let newArr = [];
let i = 0;

function showItems(){	
	newArr.push(arr[i]);
    i++;
	if (i < arr.length){
		showItems();
	}
}
showItems();

document.write(newArr);

