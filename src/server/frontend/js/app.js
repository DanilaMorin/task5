var demo = new Vue({
    el: '#demo',
    data: {
        message: 'Hello, Singree!'
    }
});

function test() {
    alert("ok");
    ajaxReq = new XMLHttpRequest();
    ajaxReq.onreadystatechange = processReq;

    var url = "http://localhost:1337/test";

    ajaxReq.open("POST", url);
    ajaxReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajaxReq.send("s");
}

function processReq() {
    if (ajaxReq.readyState == 4) {
        alert(ajaxReq.status);
        if (ajaxReq.status == 200 || ajaxReq.status == 204) {

            var str1 = ajaxReq.responseText;
            alert(str1)
        }
    }
}