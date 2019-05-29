const Router = require('koa-router');
const queries = require('../db/queries/users');

const router = new Router();
const BASE_URL = `/api/v1/users`;
router.post(BASE_URL + '/create', async (ctx) => {
    try {
        console.log("[info][createNewUser] request:");
        console.log(ctx.request.body);
        var userObj = ctx.request.body;
        console.log("[info][createNewUser] user:"+userObj.loginuser);
        const user = await queries.getSingleUsers(userObj.loginuser, userObj.passworduser);
        // console.log("[info][createNewUser] "+user);
        if (user.length === 0) {
            const newUser = await queries.setNewUser(userObj);
            console.log("[info][createNewUser] new user"+userObj.toString());
            ctx.response.body = JSON.stringify({"message": "пользователь создан"});
        } else {
            console.log("[warning][createNewUser] "+"уже существует");
            ctx.response.body = JSON.stringify({"message": "уже существует"});
        }
    }catch (e) {
        console.log("[error][createNewUser]"+e);
        ctx.response.body = JSON.stringify({"message": "ошибка создания"});
    }
});

router.post(BASE_URL + '/login', async (ctx) => {
    try {
        console.log("[info][login] request:");
        console.log(ctx.request.body);
        var userObj = ctx.request.body;
        console.log("[info][login] userObj");
        console.log(userObj);
        const user = await queries.getSingleUsers(userObj.loginuser, userObj.passworduser);
        // console.log("[info][createNewUser] "+user);
        if (user.length === 0) {
            console.log("[warning][login] вход не выполнен");
            ctx.response.body = JSON.stringify({"message": "вход не выполнен"});
        } else {
            console.log("[info][login] вход выполнен");
            ctx.response.body = JSON.stringify({"message": "вход выполнен"});
            ctx.cookies.set("user",userObj.loginuser,{  maxAge: 100000 }); //signed: true,
        }
    }catch (e) {
        console.log("[error][login]"+e);
        ctx.response.body = JSON.stringify({"message": "ошибка входа"});
    }
});

router.get(BASE_URL + '/allUsers', async (ctx) => {
    try {
        console.log("[info][allUsers] request: get all users");
        const users = await queries.getAllUsers();
        console.log("[info][allUsers] users:");
        console.log(users);
        // console.log("[info][createNewUser] "+user);
        ctx.response.body = JSON.stringify({"users": users});
    }catch (e) {
        console.log("[error][allUsers]"+e);
        ctx.response.body = JSON.stringify({"message": "ошибка входа"});
    }
});
module.exports = router;
