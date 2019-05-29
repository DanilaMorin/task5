function submit() {
    var loginText = document.forms["formReg"].elements["login"].value;
    var passwordText = document.forms["formReg"].elements["password"].value;
    var bool = true;


    // if ((isNaN(login)) || (isNaN(password)) || (isNaN(email)) || (telefon)) {
    //     bool = false;
    //     alert("Ошибка ввода");
    // }

    if (bool) {
        var req1 = {
            loginuser: loginText,
            passworduser: passwordText
        };
        var str = JSON.stringify(req1);
        // alert(str);
        ajaxReq = new XMLHttpRequest();
        ajaxReq.onreadystatechange = processReq;

        var url = "/api/v1/users/login";

        ajaxReq.open("POST", url);
        // ajaxReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajaxReq.setRequestHeader('Content-Type', 'application/json');
        ajaxReq.send(str);
    }
}

function processReq() {
    if (ajaxReq.readyState == 4) {
        if (ajaxReq.status == 200) {
            var str1 = ajaxReq.responseText;
            var otvet = JSON.parse(str1);
            alert(otvet.message)
        }
    }
}