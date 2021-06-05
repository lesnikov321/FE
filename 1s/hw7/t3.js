// Дана структура организации. Написать функционал который выводит имена всех сотрудников. 
// Глубина и уровень вложенности структуры заранее не известны.

function getArr(array) { 
    for (let i = 0; i < array.length; i++) {
      let o = array[i];
      for (let key in o) {
        if (key === "name") document.write(o.name + "<br>")
        if (Array.isArray(o[key])) {getArr(o[key])}
      }
    }
  }
  getArr(Object.values(organization));