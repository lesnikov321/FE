function getCheckedBoxValues(els) {
    const colors = [];
    els.forEach(function (el) {
        if (el.checked){
            colors.push(el.value)
        }
    })
    return colors;
};


function show(resultObj) {
    for(let key in resultObj){
        const prgr = document.createElement("p");
        prgr.innerText = `${key} - ${resultObj[key]}`
        viewContainer.append(prgr);
    }
};


function deleteElement (parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};


function modelsAdder (obj) {
    deleteElement(phoneViewInner)
    const select = document.createElement("select");
    phoneViewInner.append(select);
    select.classList.add("newSelect");
    let j = 0;
    for(let key in mobiles){
        const option = document.createElement("option");
        option.innerText = `${(Object.keys(mobiles[obj]))[j++]}`
        select.append(option);
    }
};