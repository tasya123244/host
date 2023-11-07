function verify() {
    console.log("X, a, b")
    let X = parseInt(elementX.innerText);
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    console.log(X, a, b)

    if (a > b) {
        result = " A не может быть больше B. Пожалуйста исправьте границы!"
        document.getElementById("result").innerText =  messageText + result;
        document.getElementsByName('result')[0].value = result;
    }else {

    if (a <= X && X <= b) {
        result = " Принадлежит"
        document.getElementById("result").innerText = result;
        check = true;
    } else {
        result = " Не принадлежит"
        document.getElementById("result").innerText = result;
        check = false;
    }
}
}
const elementX = document.getElementById("X");
const elementA = document.getElementById("a");
const elementB = document.getElementById("b");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener("click", verify)