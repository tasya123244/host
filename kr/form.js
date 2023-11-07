function check(form) {
    var name = document.getElementById("mname");
    var surname = document.getElementById("msurname");
    var teleph = document. getElementById("mteleph");
    var email = document. getElementById("memail");
    var data = document.getElementById("mdata");

    if (form.data_output.checked) {
            rez.innerHTML = "Ваши данные: <br>" + name.value + "<br>" + surname.value + "<br>" + teleph.value + "<br>" + email.value + "<br>" + data.value;
        
    } else {
        rez.innerHtml = "";
    }
}


function ch(form) {
    var adres = document.getElementById("madres");
    var igrush = document.getElementById("igr1");
    var teleph1 = document.getElementById("mteleph1");
    var data1 = document.getElementById("mdatadostavki");
    var parol = document.getElementById("mparol");
    var contactChoice1 = document.getElementById("PaymentChoice1");
    var contactChoice2 = document.getElementById("PaymentChoice2");

}

