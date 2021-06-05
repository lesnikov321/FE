let buttons = document.getElementsByTagName("div");

[].forEach.call(buttons, function(el) {
    el.addEventListener("click", function (){
        document.body.style.background = `${this.textContent}`;
    })
})