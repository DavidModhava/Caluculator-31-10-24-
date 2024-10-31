
let result = document.querySelector(".res");
let buttons = document.querySelectorAll('button')

for (i = 0; i <= buttons.length; i++) {
    buttons[i].onclick = function () {
        let input = this.innerText;
        updatedisplay(input)
    }
}

function updatedisplay(input) {
    let currentdisplay = result.innerText
    if (currentdisplay == "0") {
        if (input != "C" && input != "DEL" && input != "=") {
            result.innerText = ""
            result.innerText =input
        }
    }
    else {
        if (input == "DEL") {
            result.innerText = currentdisplay.substring(0, currentdisplay.length - 1)
        }

        if (input == "C") {
            result.innerText = "0"
        }
        if(input != "C" && input != "DEL" && input != "="){
            result.innerText+=input
        }

        if (input == "=") {
            let evaltext = result.innerText
            result.innerText = eval(evaltext)
        }
    }
}