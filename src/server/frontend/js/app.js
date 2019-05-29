// process.env.NODE_ENV = 'test';
//
// const chai = require('chai');
// const should = chai.should();
// const chaiHttp = require('chai-http');
// chai.use(chaiHttp);
//
// const server = require('../src/server/index');
//
// describe('routes : index', () => {
//
//     describe('GET /', () => {
//         it('should return json', (done) => {
//             chai.request(server)
//                 .get('/')
//                 .end((err, res) => {
//                     should.not.exist(err);
//                     res.status.should.eql(200);
//                     res.type.should.eql('application/json');
//                     res.body.status.should.equal('success');
//                     res.body.message.should.eql('hello, world!');
//                     done();
//                 });
//         });
//     });
//
// });
//


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
    // ajaxReq.setRequestHeader('Content-Type', 'text/json');
    // ajaxReq.setRequestHeader('Content-Type', 'application/json');
    // ajaxReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajaxReq.send("s");
}

function processReq() {
    // alert(ajaxReq.readyState);
    // alert(ajaxReq.responseText);
    if (ajaxReq.readyState == 4) {
        alert(ajaxReq.status);
        if (ajaxReq.status == 200 || ajaxReq.status == 204) {

            var str1 = ajaxReq.responseText;
            alert(str1)
            // var otvet = JSON.parse(str1);
            //
            // if ("x1" in otvet) {
            //     var x1 = otvet["x1"];
            // }
            // var data = new Date();
            // var sdata = data.getHours() + ":" + data.getMinutes();
            // if ("x2" in otvet) {
            //     var x2 = otvet["x2"];
            //     add(sdata, str, "x1=" + x1 + ", x2= " + x2);
            // } else {
            //     add(sdata, str, "x= " + x1);
            // }
        }
    }
}