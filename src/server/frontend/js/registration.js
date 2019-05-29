function createNewUser() {
    var loginText = document.forms["formReg"].elements["login"].value;
    var passwordText = document.forms["formReg"].elements["password"].value;
    var emailText = document.forms["formReg"].elements["email"].value;
    var telefonText = document.forms["formReg"].elements["telefon"].value;
    var bool = true;


    // if ((isNaN(login)) || (isNaN(password)) || (isNaN(email)) || (telefon)) {
    //     bool = false;
    //     alert("Ошибка ввода");
    // }

    if (bool) {
        var req1 = {
            loginuser: loginText,
            passworduser: passwordText,
            email: emailText,
            telefon: telefonText
        };
        var str = JSON.stringify(req1);
        alert(str);
        ajaxReq = new XMLHttpRequest();
        ajaxReq.onreadystatechange = processReq;

        var url = "/api/v1/users/create";

        ajaxReq.open("POST", url);
        // ajaxReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajaxReq.setRequestHeader('Content-Type', 'application/json');
        ajaxReq.send(str);
        // ajaxReq.send(req1);
    }
}

function processReq() {
    if (ajaxReq.readyState == 4) {
        if (ajaxReq.status == 200) {
            var str1 = ajaxReq.responseText;
            var otvet = JSON.parse(str1);

            alert(otvet.message)
            //     if("x1" in otvet) {
            //         var x1 = otvet["x1"];
            //     }
            //     var data = new  Date();
            //     var sdata = data.getHours()+":"+data.getMinutes();
            //     if("x2" in otvet){
            //         var x2 = otvet["x2"];
            //         add(sdata,str,"x1="+x1+", x2= "+x2);
            //     }
            //     else {
            //         add(sdata,str,"x= "+x1);}
        }
    }
}