const loginForm = document.forms["loginForm"];
const viewContainer = document.querySelector(".viewInner");
const buysForm = document.forms["buysForm"];
const selecterViewer = buysForm.elements.telephone;
const phoneViewInner = document.querySelector(".phoneViewInner");
const modelViewInner = document.querySelector(".modelViewInner");
const sbmBtn = document.querySelector("#sbmBtn");


sbmBtn.addEventListener("click", function () {
    const nikName = loginForm.elements.name.value;
    const tel = loginForm.elements.tel.value;
    const gender = loginForm.elements.gender.value;
    const city = loginForm.elements.city.value;
    const colors = getCheckedBoxValues(loginForm.elements.sale);
    const result = {
        Имя: nikName,
        Телефон: tel,
        Пол: gender,
        Город: city,
        Скидки: colors
    };
    deleteElement(viewContainer);
    show(result);
    // alert("Заказ принят!")
})



selecterViewer.addEventListener("change", function (el) {
    modelsAdder(el.target.value)
})


phoneViewInner.addEventListener("change", function (el) {
    deleteElement(modelViewInner);

    if (mobiles["apple"].hasOwnProperty(el.target.value)) {
        const choosedOption = mobiles["apple"][el.target.value]; 
        for(let key in choosedOption) {
            const selectedModel = document.createElement("p");
            selectedModel.innerText = `${key} - ${choosedOption[key]}`
            modelViewInner.append(selectedModel);
        }
    } else if (mobiles["samsung"].hasOwnProperty(el.target.value)) {
        const choosedOption = mobiles["samsung"][el.target.value]; 
        for(let key in choosedOption) {
            const selectedModel = document.createElement("p");
            selectedModel.innerText = `${key} - ${choosedOption[key]}`
            modelViewInner.append(selectedModel);
        }
    } else if (mobiles["xiaomi"].hasOwnProperty(el.target.value)) {
        const choosedOption = mobiles["xiaomi"][el.target.value]; 
        for(let key in choosedOption) {
            const selectedModel = document.createElement("p");
            selectedModel.innerText = `${key} - ${choosedOption[key]}`
            modelViewInner.append(selectedModel);
        }
    } else if (mobiles["huawei"].hasOwnProperty(el.target.value)) {
        const choosedOption = mobiles["huawei"][el.target.value]; 
        for(let key in choosedOption) {
            const selectedModel = document.createElement("p");
            selectedModel.innerText = `${key} - ${choosedOption[key]}`
            modelViewInner.append(selectedModel);
        }
    } else if (mobiles["zte"].hasOwnProperty(el.target.value)) {
        const choosedOption = mobiles["zte"][el.target.value]; 
        for(let key in choosedOption) {
            const selectedModel = document.createElement("p");
            selectedModel.innerText = `${key} - ${choosedOption[key]}`
            modelViewInner.append(selectedModel);
        }
    }  
})