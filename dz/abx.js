function verify() {
    console.log("X, a, b")
    let X = parseInt(elementC.value);
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    console.log(X, a, b)

    if (a > b) {
        result = " A не может быть больше B. Пожалуйста исправьте границы!"
        document.getElementById("result").innerText =  messageText + result;
        document.getElementsByName('result')[0].value = result;
    }else {

    if (a <= X && X <= b) {
        result = " Принадлежит"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = " Не принадлежит"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }
}
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementC = document.getElementById("X");
elementC.addEventListener('input', verify);

const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementB = document.getElementById("b");
elementB.addEventListener('input', verify);

