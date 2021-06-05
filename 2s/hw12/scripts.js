const loginForm = document.forms["loginForm"];
const sbmBtn = document.querySelector("#sbmBtn");


sbmBtn.addEventListener("click", function () {
    const nikName = loginForm.elements.name.value;
    const mail = loginForm.elements.mail.value;
    const tel = loginForm.elements.tel.value;
    let vornameRes = nikName.match(/[A-zА-яЁё]{3,12}/);
    let mailRes = mail.match( /\w{3,}@\w{2,}[.com]+$/);
    let telRes = tel.match(/^[066]{3}[0-9]{7}/);

    if (vornameRes === null) {
        alert("Нужно ввести от 3 до 12 буквенных символов!");
    } else if (vornameRes.input == vornameRes[0]) {
        console.log(nikName);
    }

    if (mailRes === null) {
        alert("Рекомендуемый адрес почты: не меньше 3 символа в начале, знак собачки, ещё от 2 ситмволов и заканчивается на .com");
    } else if (mailRes.input == mailRes[0]) {
        console.log(mailRes.input);
    }
    
    if (telRes === null) {
        alert("Ваш номер должен начинаться на 066 и содержать 10 цифр");
    } else if (telRes.input == telRes[0]) {
        console.log(telRes.input);
    }
})





















































// 1) 
// Имя - не меньше 3 и не больше 12 символов (буквенных)


// let vorname = "ItIsMyName"
// let vornameRes = vorname.match(/[A-zА-яЁё]{3,12}/);
// if (vornameRes.input == vornameRes[0]) {
//     console.log(vornameRes.input);
// }



// 2)
// Email : не меньше 3 символа в начале, знак собачки, ещё от 2 ситмволов и заканчивается на .com

// let mail = "122@au.com"
// let mailRes = mail.match( /\w{3,3}@\w{2,2}[.com]+$/);

// if (mailRes.input == mailRes[0]) {
//     console.log(mailRes.input);
// }



// 3)
// Телефон: 10 цифренных символов начинается на 0 (066...)

// let tel = "0667654321"
// let telRes = tel.match(/^[066]{3}[0-9]{7}/);

// if (telRes.input == telRes[0]) {
//         console.log(telRes.input);
//     }