let box = document.querySelector("#block")
box.addEventListener("click", function (e){
    console.log(e.target);

    if(e.target.classList.contains("red")){
        e.target.classList.remove("red");
        e.target.classList.add("green");
    } else if (e.target.classList.contains("green")) {
        e.target.classList.remove("green");
        e.target.classList.add("black");
    } else if (e.target.classList.contains("black")){
        e.target.classList.remove("black");
        e.target.classList.add("red");
    } else {
        e.target.classList.add("red")
    }
})




